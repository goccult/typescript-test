"use strict";
var require = function (path) {
    var script = document.createElement('script');
    script.src = path;
    document.body.appendChild(script);
};
