var jam = {
    "packages": [
        {
            "name": "backbone",
            "location": "vendor/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "domReady",
            "location": "vendor/jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "vendor/jam/underscore",
            "main": "underscore.js"
        }
    ],
    "version": "0.2.15",
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "backbone",
            "location": "vendor/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "domReady",
            "location": "vendor/jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "vendor/jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
});
}
else {
    var require = {
    "packages": [
        {
            "name": "backbone",
            "location": "vendor/jam/backbone",
            "main": "backbone.js"
        },
        {
            "name": "domReady",
            "location": "vendor/jam/domReady",
            "main": "domReady.js"
        },
        {
            "name": "jquery",
            "location": "vendor/jam/jquery",
            "main": "dist/jquery.js"
        },
        {
            "name": "underscore",
            "location": "vendor/jam/underscore",
            "main": "underscore.js"
        }
    ],
    "shim": {
        "backbone": {
            "deps": [
                "underscore",
                "jquery"
            ],
            "exports": "Backbone"
        },
        "underscore": {
            "exports": "_"
        }
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}