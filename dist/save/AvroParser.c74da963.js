// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
class $0b4e4bc29b904e12$export$81bd520142e4b36b {
    /**
     * Reads a fixed number of bytes from the stream.
     *
     * @param stream -
     * @param length -
     * @param options -
     */ static async readFixedBytes(stream, length, options = {}) {
        const bytes = await stream.read(length, {
            abortSignal: options.abortSignal
        });
        if (bytes.length !== length) throw new Error("Hit stream end.");
        return bytes;
    }
    /**
     * Reads a single byte from the stream.
     *
     * @param stream -
     * @param options -
     */ static async readByte(stream, options = {}) {
        const buf = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readFixedBytes(stream, 1, options);
        return buf[0];
    }
    // int and long are stored in variable-length zig-zag coding.
    // variable-length: https://lucene.apache.org/core/3_5_0/fileformats.html#VInt
    // zig-zag: https://developers.google.com/protocol-buffers/docs/encoding?csw=1#types
    static async readZigZagLong(stream, options = {}) {
        let zigZagEncoded = 0;
        let significanceInBit = 0;
        let byte, haveMoreByte, significanceInFloat;
        do {
            byte = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readByte(stream, options);
            haveMoreByte = byte & 0x80;
            zigZagEncoded |= (byte & 0x7f) << significanceInBit;
            significanceInBit += 7;
        }while (haveMoreByte && significanceInBit < 28); // bitwise operation only works for 32-bit integers
        if (haveMoreByte) {
            // Switch to float arithmetic
            // eslint-disable-next-line no-self-assign
            zigZagEncoded;
            significanceInFloat = 268435456; // 2 ** 28.
            do {
                byte = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readByte(stream, options);
                zigZagEncoded += (byte & 0x7f) * significanceInFloat;
                significanceInFloat *= 128; // 2 ** 7
            }while (byte & 0x80);
            const res = (zigZagEncoded % 2 ? -(zigZagEncoded + 1) : zigZagEncoded) / 2;
            if (res < Number.MIN_SAFE_INTEGER || res > Number.MAX_SAFE_INTEGER) throw new Error("Integer overflow.");
            return res;
        }
        return zigZagEncoded >> 1 ^ -(zigZagEncoded & 1);
    }
    static async readLong(stream, options = {}) {
        return $0b4e4bc29b904e12$export$81bd520142e4b36b.readZigZagLong(stream, options);
    }
    static async readInt(stream, options = {}) {
        return $0b4e4bc29b904e12$export$81bd520142e4b36b.readZigZagLong(stream, options);
    }
    static async readNull() {
        return null;
    }
    static async readBoolean(stream, options = {}) {
        const b = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readByte(stream, options);
        if (b === 1) return true;
        else if (b === 0) return false;
        else throw new Error("Byte was not a boolean.");
    }
    static async readFloat(stream, options = {}) {
        const u8arr = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readFixedBytes(stream, 4, options);
        const view = new DataView(u8arr.buffer, u8arr.byteOffset, u8arr.byteLength);
        return view.getFloat32(0, true); // littleEndian = true
    }
    static async readDouble(stream, options = {}) {
        const u8arr = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readFixedBytes(stream, 8, options);
        const view = new DataView(u8arr.buffer, u8arr.byteOffset, u8arr.byteLength);
        return view.getFloat64(0, true); // littleEndian = true
    }
    static async readBytes(stream, options = {}) {
        const size = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readLong(stream, options);
        if (size < 0) throw new Error("Bytes size was negative.");
        return stream.read(size, {
            abortSignal: options.abortSignal
        });
    }
    static async readString(stream, options = {}) {
        const u8arr = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readBytes(stream, options);
        const utf8decoder = new TextDecoder();
        return utf8decoder.decode(u8arr);
    }
    static async readMapPair(stream, readItemMethod, options = {}) {
        const key = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readString(stream, options);
        // FUTURE: this won't work with readFixed (currently not supported) which needs a length as the parameter.
        const value = await readItemMethod(stream, options);
        return {
            key: key,
            value: value
        };
    }
    static async readMap(stream, readItemMethod, options = {}) {
        const readPairMethod = (s, opts = {})=>{
            return $0b4e4bc29b904e12$export$81bd520142e4b36b.readMapPair(s, readItemMethod, opts);
        };
        const pairs = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readArray(stream, readPairMethod, options);
        const dict = {};
        for (const pair of pairs)dict[pair.key] = pair.value;
        return dict;
    }
    static async readArray(stream, readItemMethod, options = {}) {
        const items = [];
        for(let count = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readLong(stream, options); count !== 0; count = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readLong(stream, options)){
            if (count < 0) {
                // Ignore block sizes
                await $0b4e4bc29b904e12$export$81bd520142e4b36b.readLong(stream, options);
                count = -count;
            }
            while(count--){
                const item = await readItemMethod(stream, options);
                items.push(item);
            }
        }
        return items;
    }
}
var $0b4e4bc29b904e12$var$AvroComplex;
(function(AvroComplex) {
    AvroComplex["RECORD"] = "record";
    AvroComplex["ENUM"] = "enum";
    AvroComplex["ARRAY"] = "array";
    AvroComplex["MAP"] = "map";
    AvroComplex["UNION"] = "union";
    AvroComplex["FIXED"] = "fixed";
})($0b4e4bc29b904e12$var$AvroComplex || ($0b4e4bc29b904e12$var$AvroComplex = {}));
var $0b4e4bc29b904e12$var$AvroPrimitive;
(function(AvroPrimitive) {
    AvroPrimitive["NULL"] = "null";
    AvroPrimitive["BOOLEAN"] = "boolean";
    AvroPrimitive["INT"] = "int";
    AvroPrimitive["LONG"] = "long";
    AvroPrimitive["FLOAT"] = "float";
    AvroPrimitive["DOUBLE"] = "double";
    AvroPrimitive["BYTES"] = "bytes";
    AvroPrimitive["STRING"] = "string";
})($0b4e4bc29b904e12$var$AvroPrimitive || ($0b4e4bc29b904e12$var$AvroPrimitive = {}));
class $0b4e4bc29b904e12$export$657e92199a82b893 {
    /**
     * Determines the AvroType from the Avro Schema.
     */ // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    static fromSchema(schema) {
        if (typeof schema === "string") return $0b4e4bc29b904e12$export$657e92199a82b893.fromStringSchema(schema);
        else if (Array.isArray(schema)) return $0b4e4bc29b904e12$export$657e92199a82b893.fromArraySchema(schema);
        else return $0b4e4bc29b904e12$export$657e92199a82b893.fromObjectSchema(schema);
    }
    static fromStringSchema(schema) {
        switch(schema){
            case $0b4e4bc29b904e12$var$AvroPrimitive.NULL:
            case $0b4e4bc29b904e12$var$AvroPrimitive.BOOLEAN:
            case $0b4e4bc29b904e12$var$AvroPrimitive.INT:
            case $0b4e4bc29b904e12$var$AvroPrimitive.LONG:
            case $0b4e4bc29b904e12$var$AvroPrimitive.FLOAT:
            case $0b4e4bc29b904e12$var$AvroPrimitive.DOUBLE:
            case $0b4e4bc29b904e12$var$AvroPrimitive.BYTES:
            case $0b4e4bc29b904e12$var$AvroPrimitive.STRING:
                return new $0b4e4bc29b904e12$var$AvroPrimitiveType(schema);
            default:
                throw new Error(`Unexpected Avro type ${schema}`);
        }
    }
    static fromArraySchema(schema) {
        return new $0b4e4bc29b904e12$var$AvroUnionType(schema.map($0b4e4bc29b904e12$export$657e92199a82b893.fromSchema));
    }
    static fromObjectSchema(schema) {
        const type = schema.type;
        // Primitives can be defined as strings or objects
        try {
            return $0b4e4bc29b904e12$export$657e92199a82b893.fromStringSchema(type);
        } catch (_a) {
        // no-op
        }
        switch(type){
            case $0b4e4bc29b904e12$var$AvroComplex.RECORD:
                if (schema.aliases) throw new Error(`aliases currently is not supported, schema: ${schema}`);
                if (!schema.name) throw new Error(`Required attribute 'name' doesn't exist on schema: ${schema}`);
                // eslint-disable-next-line no-case-declarations
                const fields = {};
                if (!schema.fields) throw new Error(`Required attribute 'fields' doesn't exist on schema: ${schema}`);
                for (const field of schema.fields)fields[field.name] = $0b4e4bc29b904e12$export$657e92199a82b893.fromSchema(field.type);
                return new $0b4e4bc29b904e12$var$AvroRecordType(fields, schema.name);
            case $0b4e4bc29b904e12$var$AvroComplex.ENUM:
                if (schema.aliases) throw new Error(`aliases currently is not supported, schema: ${schema}`);
                if (!schema.symbols) throw new Error(`Required attribute 'symbols' doesn't exist on schema: ${schema}`);
                return new $0b4e4bc29b904e12$var$AvroEnumType(schema.symbols);
            case $0b4e4bc29b904e12$var$AvroComplex.MAP:
                if (!schema.values) throw new Error(`Required attribute 'values' doesn't exist on schema: ${schema}`);
                return new $0b4e4bc29b904e12$var$AvroMapType($0b4e4bc29b904e12$export$657e92199a82b893.fromSchema(schema.values));
            case $0b4e4bc29b904e12$var$AvroComplex.ARRAY:
            case $0b4e4bc29b904e12$var$AvroComplex.FIXED:
            default:
                throw new Error(`Unexpected Avro type ${type} in ${schema}`);
        }
    }
}
class $0b4e4bc29b904e12$var$AvroPrimitiveType extends $0b4e4bc29b904e12$export$657e92199a82b893 {
    constructor(primitive){
        super();
        this._primitive = primitive;
    }
    // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    read(stream, options = {}) {
        switch(this._primitive){
            case $0b4e4bc29b904e12$var$AvroPrimitive.NULL:
                return $0b4e4bc29b904e12$export$81bd520142e4b36b.readNull();
            case $0b4e4bc29b904e12$var$AvroPrimitive.BOOLEAN:
                return $0b4e4bc29b904e12$export$81bd520142e4b36b.readBoolean(stream, options);
            case $0b4e4bc29b904e12$var$AvroPrimitive.INT:
                return $0b4e4bc29b904e12$export$81bd520142e4b36b.readInt(stream, options);
            case $0b4e4bc29b904e12$var$AvroPrimitive.LONG:
                return $0b4e4bc29b904e12$export$81bd520142e4b36b.readLong(stream, options);
            case $0b4e4bc29b904e12$var$AvroPrimitive.FLOAT:
                return $0b4e4bc29b904e12$export$81bd520142e4b36b.readFloat(stream, options);
            case $0b4e4bc29b904e12$var$AvroPrimitive.DOUBLE:
                return $0b4e4bc29b904e12$export$81bd520142e4b36b.readDouble(stream, options);
            case $0b4e4bc29b904e12$var$AvroPrimitive.BYTES:
                return $0b4e4bc29b904e12$export$81bd520142e4b36b.readBytes(stream, options);
            case $0b4e4bc29b904e12$var$AvroPrimitive.STRING:
                return $0b4e4bc29b904e12$export$81bd520142e4b36b.readString(stream, options);
            default:
                throw new Error("Unknown Avro Primitive");
        }
    }
}
class $0b4e4bc29b904e12$var$AvroEnumType extends $0b4e4bc29b904e12$export$657e92199a82b893 {
    constructor(symbols){
        super();
        this._symbols = symbols;
    }
    // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    async read(stream, options = {}) {
        const value = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readInt(stream, options);
        return this._symbols[value];
    }
}
class $0b4e4bc29b904e12$var$AvroUnionType extends $0b4e4bc29b904e12$export$657e92199a82b893 {
    constructor(types){
        super();
        this._types = types;
    }
    async read(stream, options = {}) {
        const typeIndex = await $0b4e4bc29b904e12$export$81bd520142e4b36b.readInt(stream, options);
        return this._types[typeIndex].read(stream, options);
    }
}
class $0b4e4bc29b904e12$var$AvroMapType extends $0b4e4bc29b904e12$export$657e92199a82b893 {
    constructor(itemType){
        super();
        this._itemType = itemType;
    }
    // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    read(stream, options = {}) {
        const readItemMethod = (s, opts)=>{
            return this._itemType.read(s, opts);
        };
        return $0b4e4bc29b904e12$export$81bd520142e4b36b.readMap(stream, readItemMethod, options);
    }
}
class $0b4e4bc29b904e12$var$AvroRecordType extends $0b4e4bc29b904e12$export$657e92199a82b893 {
    constructor(fields, name){
        super();
        this._fields = fields;
        this._name = name;
    }
    // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
    async read(stream, options = {}) {
        // eslint-disable-next-line @typescript-eslint/no-wrapper-object-types
        const record = {};
        record["$schema"] = this._name;
        for(const key in this._fields)if (Object.prototype.hasOwnProperty.call(this._fields, key)) record[key] = await this._fields[key].read(stream, options);
        return record;
    }
}


//# sourceMappingURL=AvroParser.c74da963.js.map
