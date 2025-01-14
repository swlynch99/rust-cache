var $ahtWN$nodeos = require("node:os");
var $ahtWN$nodeprocess = require("node:process");

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.


function $ef03cd0eb5a0737c$export$87e37b6916dc901a() {
    return "User-Agent";
}
async function $ef03cd0eb5a0737c$export$3e6b862a73a0e567(map) {
    if ($ahtWN$nodeprocess && $ahtWN$nodeprocess.versions) {
        const versions = $ahtWN$nodeprocess.versions;
        if (versions.bun) map.set("Bun", versions.bun);
        else if (versions.deno) map.set("Deno", versions.deno);
        else if (versions.node) map.set("Node", versions.node);
    }
    map.set("OS", `(${$ahtWN$nodeos.arch()}-${$ahtWN$nodeos.type()}-${$ahtWN$nodeos.release()})`);
}


//# sourceMappingURL=userAgentPlatform.bb3ff862.js.map
