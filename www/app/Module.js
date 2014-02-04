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
var define;
define(function (require) {
    "use strict";
//    var Module = require("Module");

    var Module = function () {
        this.ko = require("ko");
        this.module = this.ko.observable("Module");

        this.Module = function (name, data) {
            this.module("page-" + name.toLowerCase());
            $(data).appendTo("body");

            this.ko.applyBindings(this, document.getElementById(this.module()));
            $.mobile.navigate("#" + this.module());

            this.request("GET", "/genre", {
                output: "jsonp"
            }).done(function (genres) {
                Module.genres = genres;
            });
        };

        this.request = function (type, url, data) {
            return $.ajax({
                data: data,
                dataType: "jsonp",
                type: type,
                url: "http://api.deezer.com" + url
            });
        };

        Module.require = function (module, data) {
            require(["Ctrl/" + module], function (Module) {
                if (typeof Module.execute === "function") {
                    Module.execute(data || {});
                }
            });
        };
    };

//    Module.prototype = new Module();

//    if (undefined === Module.instance) {
//        Module.instance = new Module();
//        Module.instance.Module();
//    }

    return Module;
});