const $7cd79968bc7bef3d$var$REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
const $7cd79968bc7bef3d$var$REGEX_IS_INSTALLATION = /^ghs_/;
const $7cd79968bc7bef3d$var$REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function $7cd79968bc7bef3d$export$73693bad9f5880b0(token) {
    const isApp = token.split(/\./).length === 3;
    const isInstallation = $7cd79968bc7bef3d$var$REGEX_IS_INSTALLATION_LEGACY.test(token) || $7cd79968bc7bef3d$var$REGEX_IS_INSTALLATION.test(token);
    const isUserToServer = $7cd79968bc7bef3d$var$REGEX_IS_USER_TO_SERVER.test(token);
    const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
    return {
        type: "token",
        token: token,
        tokenType: tokenType
    };
}


//# sourceMappingURL=auth.45f74162.js.map
