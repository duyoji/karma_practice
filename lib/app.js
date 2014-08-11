/**
 * Created by Tsuyoshi on 2014/08/12.
 */
define([], function (){
    'use strict';

    var App = function(){};

    var instance = null;
    return {
        getInstance : function () {
            if (!instance) {
                instance = new App();
            }

            return instance;
        }
    };
});