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
var define, Media;
define(function (require) {
    "use strict";
    var Module = require("Module");
    var ko = require("ko");

    var Track = function (data) {
        this.title = ko.observable(data.title);
        this.desc = ko.observable(data.artist.name + " - " + data.album.title);
        this.img = ko.observable({src: data.album.cover + "?size=small"});

        this.target = ko.observable({"data-target": "#collapse-" + data.id});
        this.collapse = ko.observable({id: "collapse-" + data.id});

        this.info = function () {
            Module.require("Artist", {id: data.artist.id});
        };

        this.play = function () {
            this.stop();

            Track.media = new Media(data.preview);
            Track.media.play();
        };

        this.stop = function () {
            if (undefined !== Track.media) {
                Track.media.stop();
            }
        };
    };

    return Track;
});