/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with this
 * work for additional information regarding copyright ownership.  The ASF
 * licenses this file to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
var cordova, require;
require.config({
    paths: {
        bs: "../lib/js/bootstrap.min",
        phonegap: "../phonegap",
        jqm: "../lib/js/jquery.mobile-1.4.0.min",
        jquery: "../lib/js/jquery-2.1.0.min",
        ko: "../lib/js/knockout-3.0.0",
        text: "../lib/js/require.text-2.0.10"
    },
    shim: {
        bs: ["jquery"]
    }
});

require(["require", "jqm", "bs", "phonegap"], function (require) {
    "use strict";

    $(document).on("deviceready", function () {
        require(["Applet"]);
    });

    if (undefined === cordova) {
        $(document).trigger("deviceready");
    }
});
