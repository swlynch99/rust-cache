require("./is-plain-object.524ab8c5.js");
require("./dist-src.ba4f207f.js");
require("./get-buffer-response.98167976.js");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $4b3b4b131ed32254$exports = {};
$4b3b4b131ed32254$exports = new URL("is-plain-object.524ab8c5.js", "file:" + __filename).toString();


var $f2c346280cf910ba$exports = {};
$f2c346280cf910ba$exports = new URL("dist-src.ba4f207f.js", "file:" + __filename).toString();


var $0ea0523a9fd6a3e5$exports = {};
$0ea0523a9fd6a3e5$exports = new URL("get-buffer-response.98167976.js", "file:" + __filename).toString();


function $bd3acb3c45b362e2$export$2e2bcd8739ae039(requestOptions) {
    const log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;
    const parseSuccessResponseBody = requestOptions.request?.parseSuccessResponseBody !== false;
    if ((0, $4b3b4b131ed32254$exports.isPlainObject)(requestOptions.body) || Array.isArray(requestOptions.body)) requestOptions.body = JSON.stringify(requestOptions.body);
    let headers = {};
    let status;
    let url;
    let { fetch: fetch } = globalThis;
    if (requestOptions.request?.fetch) fetch = requestOptions.request.fetch;
    if (!fetch) throw new Error("fetch is not set. Please pass a fetch implementation as new Octokit({ request: { fetch }}). Learn more at https://github.com/octokit/octokit.js/#fetch-missing");
    return fetch(requestOptions.url, {
        method: requestOptions.method,
        body: requestOptions.body,
        redirect: requestOptions.request?.redirect,
        headers: requestOptions.headers,
        signal: requestOptions.request?.signal,
        // duplex must be set if request.body is ReadableStream or Async Iterables.
        // See https://fetch.spec.whatwg.org/#dom-requestinit-duplex.
        ...requestOptions.body && {
            duplex: "half"
        }
    }).then(async (response)=>{
        url = response.url;
        status = response.status;
        for (const keyAndValue of response.headers)headers[keyAndValue[0]] = keyAndValue[1];
        if ("deprecation" in headers) {
            const matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
            const deprecationLink = matches && matches.pop();
            log.warn(`[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${headers.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`);
        }
        if (status === 204 || status === 205) return;
        if (requestOptions.method === "HEAD") {
            if (status < 400) return;
            throw new (0, $f2c346280cf910ba$exports.RequestError)(response.statusText, status, {
                response: {
                    url: url,
                    status: status,
                    headers: headers,
                    data: void 0
                },
                request: requestOptions
            });
        }
        if (status === 304) throw new (0, $f2c346280cf910ba$exports.RequestError)("Not modified", status, {
            response: {
                url: url,
                status: status,
                headers: headers,
                data: await $bd3acb3c45b362e2$var$getResponseData(response)
            },
            request: requestOptions
        });
        if (status >= 400) {
            const data = await $bd3acb3c45b362e2$var$getResponseData(response);
            const error = new (0, $f2c346280cf910ba$exports.RequestError)($bd3acb3c45b362e2$var$toErrorMessage(data), status, {
                response: {
                    url: url,
                    status: status,
                    headers: headers,
                    data: data
                },
                request: requestOptions
            });
            throw error;
        }
        return parseSuccessResponseBody ? await $bd3acb3c45b362e2$var$getResponseData(response) : response.body;
    }).then((data)=>{
        return {
            status: status,
            url: url,
            headers: headers,
            data: data
        };
    }).catch((error)=>{
        if (error instanceof (0, $f2c346280cf910ba$exports.RequestError)) throw error;
        else if (error.name === "AbortError") throw error;
        let message = error.message;
        if (error.name === "TypeError" && "cause" in error) {
            if (error.cause instanceof Error) message = error.cause.message;
            else if (typeof error.cause === "string") message = error.cause;
        }
        throw new (0, $f2c346280cf910ba$exports.RequestError)(message, 500, {
            request: requestOptions
        });
    });
}
async function $bd3acb3c45b362e2$var$getResponseData(response) {
    const contentType = response.headers.get("content-type");
    if (/application\/json/.test(contentType)) return response.json().catch(()=>response.text()).catch(()=>"");
    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) return response.text();
    return (0, (/*@__PURE__*/$parcel$interopDefault($0ea0523a9fd6a3e5$exports)))(response);
}
function $bd3acb3c45b362e2$var$toErrorMessage(data) {
    if (typeof data === "string") return data;
    let suffix;
    if ("documentation_url" in data) suffix = ` - ${data.documentation_url}`;
    else suffix = "";
    if ("message" in data) {
        if (Array.isArray(data.errors)) return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}${suffix}`;
        return `${data.message}${suffix}`;
    }
    return `Unknown error: ${JSON.stringify(data)}`;
}


