var $74FL8$nodeos = require("node:os");
var $74FL8$nodeprocess = require("node:process");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.


function $b71c792fbeb872a8$export$87e37b6916dc901a() {
    return "User-Agent";
}
async function $b71c792fbeb872a8$export$3e6b862a73a0e567(map) {
    if ($74FL8$nodeprocess && $74FL8$nodeprocess.versions) {
        const versions = $74FL8$nodeprocess.versions;
        if (versions.bun) map.set("Bun", versions.bun);
        else if (versions.deno) map.set("Deno", versions.deno);
        else if (versions.node) map.set("Node", versions.node);
    }
    map.set("OS", `(${$74FL8$nodeos.arch()}-${$74FL8$nodeos.type()}-${$74FL8$nodeos.release()})`);
}


