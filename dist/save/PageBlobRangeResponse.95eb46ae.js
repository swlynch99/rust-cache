// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * Function that converts PageRange and ClearRange to a common Range object.
 * PageRange and ClearRange have start and end while Range offset and count
 * this function normalizes to Range.
 * @param response - Model PageBlob Range response
 */ function $76cb57ca1ce8e0dc$export$1f38136ed5a43174(response) {
    const pageRange = (response._response.parsedBody.pageRange || []).map((x)=>({
            offset: x.start,
            count: x.end - x.start
        }));
    const clearRange = (response._response.parsedBody.clearRange || []).map((x)=>({
            offset: x.start,
            count: x.end - x.start
        }));
    return Object.assign(Object.assign({}, response), {
        pageRange: pageRange,
        clearRange: clearRange,
        _response: Object.assign(Object.assign({}, response._response), {
            parsedBody: {
                pageRange: pageRange,
                clearRange: clearRange
            }
        })
    });
}


