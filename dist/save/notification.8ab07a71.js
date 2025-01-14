require("./nodejs-common.868e4b2b.js");
require("./build.97320181.js");


      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
"use strict";
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.Notification = void 0;

var $c5iBM = parcelRequire("c5iBM");

var $gt46O = parcelRequire("gt46O");
/**
 * The API-formatted resource description of the notification.
 *
 * Note: This is not guaranteed to be up-to-date when accessed. To get the
 * latest record, call the `getMetadata()` method.
 *
 * @name Notification#metadata
 * @type {object}
 */ /**
 * A Notification object is created from your {@link Bucket} object using
 * {@link Bucket#notification}. Use it to interact with Cloud Pub/Sub
 * notifications.
 *
 * See {@link https://cloud.google.com/storage/docs/pubsub-notifications| Cloud Pub/Sub Notifications for Google Cloud Storage}
 *
 * @class
 * @hideconstructor
 *
 * @param {Bucket} bucket The bucket instance this notification is attached to.
 * @param {string} id The ID of the notification.
 *
 * @example
 * ```
 * const {Storage} = require('@google-cloud/storage');
 * const storage = new Storage();
 * const myBucket = storage.bucket('my-bucket');
 *
 * const notification = myBucket.notification('1');
 * ```
 */ class $51f0b04a7668a586$var$Notification extends $c5iBM.ServiceObject {
    constructor(bucket, id){
        const requestQueryObject = {};
        const methods = {
            /**
             * Creates a notification subscription for the bucket.
             *
             * See {@link https://cloud.google.com/storage/docs/json_api/v1/notifications/insert| Notifications: insert}
             * @method Notification#create
             *
             * @param {Topic|string} topic The Cloud PubSub topic to which this
             * subscription publishes. If the project ID is omitted, the current
             * project ID will be used.
             *
             * Acceptable formats are:
             * - `projects/grape-spaceship-123/topics/my-topic`
             *
             * - `my-topic`
             * @param {CreateNotificationRequest} [options] Metadata to set for
             *     the notification.
             * @param {CreateNotificationCallback} [callback] Callback function.
             * @returns {Promise<CreateNotificationResponse>}
             * @throws {Error} If a valid topic is not provided.
             *
             * @example
             * ```
             * const {Storage} = require('@google-cloud/storage');
             * const storage = new Storage();
             * const myBucket = storage.bucket('my-bucket');
             * const notification = myBucket.notification('1');
             *
             * notification.create(function(err, notification, apiResponse) {
             *   if (!err) {
             *     // The notification was created successfully.
             *   }
             * });
             *
             * //-
             * // If the callback is omitted, we'll return a Promise.
             * //-
             * notification.create().then(function(data) {
             *   const notification = data[0];
             *   const apiResponse = data[1];
             * });
             * ```
             */ create: true,
            /**
             * @typedef {array} DeleteNotificationResponse
             * @property {object} 0 The full API response.
             */ /**
             * Permanently deletes a notification subscription.
             *
             * See {@link https://cloud.google.com/storage/docs/json_api/v1/notifications/delete| Notifications: delete API Documentation}
             *
             * @param {object} [options] Configuration options.
             * @param {string} [options.userProject] The ID of the project which will be
             *     billed for the request.
             * @param {DeleteNotificationCallback} [callback] Callback function.
             * @returns {Promise<DeleteNotificationResponse>}
             *
             * @example
             * ```
             * const {Storage} = require('@google-cloud/storage');
             * const storage = new Storage();
             * const myBucket = storage.bucket('my-bucket');
             * const notification = myBucket.notification('1');
             *
             * notification.delete(function(err, apiResponse) {});
             *
             * //-
             * // If the callback is omitted, we'll return a Promise.
             * //-
             * notification.delete().then(function(data) {
             *   const apiResponse = data[0];
             * });
             *
             * ```
             * @example <caption>include:samples/deleteNotification.js</caption>
             * region_tag:storage_delete_bucket_notification
             * Another example:
             */ delete: {
                reqOpts: {
                    qs: requestQueryObject
                }
            },
            /**
             * Get a notification and its metadata if it exists.
             *
             * See {@link https://cloud.google.com/storage/docs/json_api/v1/notifications/get| Notifications: get API Documentation}
             *
             * @param {object} [options] Configuration options.
             *     See {@link Bucket#createNotification} for create options.
             * @param {boolean} [options.autoCreate] Automatically create the object if
             *     it does not exist. Default: `false`.
             * @param {string} [options.userProject] The ID of the project which will be
             *     billed for the request.
             * @param {GetNotificationCallback} [callback] Callback function.
             * @return {Promise<GetNotificationCallback>}
             *
             * @example
             * ```
             * const {Storage} = require('@google-cloud/storage');
             * const storage = new Storage();
             * const myBucket = storage.bucket('my-bucket');
             * const notification = myBucket.notification('1');
             *
             * notification.get(function(err, notification, apiResponse) {
             *   // `notification.metadata` has been populated.
             * });
             *
             * //-
             * // If the callback is omitted, we'll return a Promise.
             * //-
             * notification.get().then(function(data) {
             *   const notification = data[0];
             *   const apiResponse = data[1];
             * });
             * ```
             */ get: {
                reqOpts: {
                    qs: requestQueryObject
                }
            },
            /**
             * Get the notification's metadata.
             *
             * See {@link https://cloud.google.com/storage/docs/json_api/v1/notifications/get| Notifications: get API Documentation}
             *
             * @param {object} [options] Configuration options.
             * @param {string} [options.userProject] The ID of the project which will be
             *     billed for the request.
             * @param {GetNotificationMetadataCallback} [callback] Callback function.
             * @returns {Promise<GetNotificationMetadataResponse>}
             *
             * @example
             * ```
             * const {Storage} = require('@google-cloud/storage');
             * const storage = new Storage();
             * const myBucket = storage.bucket('my-bucket');
             * const notification = myBucket.notification('1');
             *
             * notification.getMetadata(function(err, metadata, apiResponse) {});
             *
             * //-
             * // If the callback is omitted, we'll return a Promise.
             * //-
             * notification.getMetadata().then(function(data) {
             *   const metadata = data[0];
             *   const apiResponse = data[1];
             * });
             *
             * ```
             * @example <caption>include:samples/getMetadataNotifications.js</caption>
             * region_tag:storage_print_pubsub_bucket_notification
             * Another example:
             */ getMetadata: {
                reqOpts: {
                    qs: requestQueryObject
                }
            },
            /**
             * @typedef {array} NotificationExistsResponse
             * @property {boolean} 0 Whether the notification exists or not.
             */ /**
             * @callback NotificationExistsCallback
             * @param {?Error} err Request error, if any.
             * @param {boolean} exists Whether the notification exists or not.
             */ /**
             * Check if the notification exists.
             *
             * @method Notification#exists
             * @param {NotificationExistsCallback} [callback] Callback function.
             * @returns {Promise<NotificationExistsResponse>}
             *
             * @example
             * ```
             * const {Storage} = require('@google-cloud/storage');
             * const storage = new Storage();
             * const myBucket = storage.bucket('my-bucket');
             * const notification = myBucket.notification('1');
             *
             * notification.exists(function(err, exists) {});
             *
             * //-
             * // If the callback is omitted, we'll return a Promise.
             * //-
             * notification.exists().then(function(data) {
             *   const exists = data[0];
             * });
             * ```
             */ exists: true
        };
        super({
            parent: bucket,
            baseUrl: '/notificationConfigs',
            id: id.toString(),
            createMethod: bucket.createNotification.bind(bucket),
            methods: methods
        });
    }
}
module.exports.Notification = $51f0b04a7668a586$var$Notification;
/*! Developer Documentation
 *
 * All async methods (except for streams) will return a Promise in the event
 * that a callback is omitted.
 */ (0, $gt46O.promisifyAll)($51f0b04a7668a586$var$Notification);


