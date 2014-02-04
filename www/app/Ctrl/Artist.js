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
    var Module = require("Module");

    var Artist = function () {
        this.artist = this.ko.observable(null);

        this.Artist = function () {
            this.Module("Artist", require("text!View/Artist.html"));
        };

        this.execute = function (data) {
            this.request("GET", "/artist/" + data.id, {
                output: "jsonp"
            }).done(function (artist) {
                this.artist(artist.name);
            }.bind(this));
        };
    };

    Artist.prototype = new Module();

    if (undefined === Artist.instance) {
        Artist.instance = new Artist();
        Artist.instance.Artist();
    }

    return Artist.instance;
});