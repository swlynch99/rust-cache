const $044e20ea6173bf37$var$REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
const $044e20ea6173bf37$var$REGEX_IS_INSTALLATION = /^ghs_/;
const $044e20ea6173bf37$var$REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function $044e20ea6173bf37$export$73693bad9f5880b0(token) {
    const isApp = token.split(/\./).length === 3;
    const isInstallation = $044e20ea6173bf37$var$REGEX_IS_INSTALLATION_LEGACY.test(token) || $044e20ea6173bf37$var$REGEX_IS_INSTALLATION.test(token);
    const isUserToServer = $044e20ea6173bf37$var$REGEX_IS_USER_TO_SERVER.test(token);
    const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
    return {
        type: "token",
        token: token,
        tokenType: tokenType
    };
}


