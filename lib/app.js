/**
 * Created by Tsuyoshi on 2014/08/12.
 */
(function (window) {
    'use strict';

    window.App = function(){
        var instance = this;

        window.App = function() {
            return instance;
        };
    };

}(window));