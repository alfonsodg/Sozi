/*
 * Sozi - A presentation tool using the SVG standard
 *
 * Copyright (C) 2010-2012 Guillaume Savaton
 *
 * This program is dual licensed under the terms of the MIT license
 * or the GNU General Public License (GPL) version 3.
 * A copy of both licenses is provided in the doc/ folder of the
 * official release of Sozi.
 * 
 * See http://sozi.baierouge.fr/wiki/en:license for details.
 *
 * @depend module.js
 */

/*global module:true sozi:true */

module("sozi.events", function (exports) {
    var listenerRegistry = {};

    /*
     * Adds a listener for a given event type.
     *
     * The event type is provided as a string by the key parameter.
     * The function to be executed is provided by the handler parameter.
     */
    exports.listen = function (key, handler) {
        if (!listenerRegistry.hasOwnProperty(key)) {
            listenerRegistry[key] = [];
        }
        listenerRegistry[key].push(handler);
    };
    
    /*
     * Fire an event of the given type.
     *
     * All event handlers added for the given event type are
     * executed.
     * Additional arguments provided to this function are passed
     * to the event handlers.
     */
    exports.fire = function (key) {
        var args = Array.prototype.slice.call(arguments, 1);
        if (listenerRegistry.hasOwnProperty(key)) {
            listenerRegistry[key].forEach(function (listener) {
                listener.apply(null, args);
            });
        }
    };
});
