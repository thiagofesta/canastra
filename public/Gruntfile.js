/*global module:false*/
module.exports = function(grunt) {
    
    var config = {},
        requirejs = require("./js/vendor/jam/require.config.js");
    
    // JSHINT
    ///////////////////////////////////////////////////////////////////////////
    config.jshint = {
        options: {
            // Enforcing options
            strict: true,
            forin: true,
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            undef: true,
            unused: true,
            eqnull: true,
            indent: 4,
            
            // Relaxing options
            //
            
            // Environments
            browser: true,
            
            // Legacy options
            onevar: true,
            
            // Setting globals
            globals: {
                // External Libs
                jQuery: true,
                $: true,
                _: true,
                Backbone: true,
                define: true,
                require: true
            }
        },
        grunt: {
            options: {
                strict: false,
                onevar: false
            },
            src: 'Gruntfile.js'
        },
        canastra: {
            src: [
                'js/**/*.js',
                '!js/vendor/**/*.js'
            ]
        }
    };
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    
    
    
    // JASMINE
    ///////////////////////////////////////////////////////////////////////////
    config.jasmine = {
        app: {
            src: [
                'js/**/*.js',
                '!js/vendor/jam/jquery/src/**/*',
                '!js/vendor/jam/jquery/test/**/*',
                '!js/**/Gruntfile.js'
            ],
            options: {
                specs: 'test/**/*.spec.js',
                helpers: 'test/**/*.helper.js',
                template: require('grunt-template-jasmine-istanbul'),
                templateOptions: {
                    coverage: 'coverage/coverage.json',
                    report: [
                        {
                            type: 'html',
                            options: {
                                dir: 'coverage/output/html'
                            }
                        }
                    ],
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: '.grunt/grunt-contrib-jasmine/js/',
                            packages: requirejs.packages,
                            shim: requirejs.shim,
                            deps: ['jquery', 'underscore', 'backbone'],
                            callback: function() {
                                // TODO
                            }
                        }
                    }
                }
            }
        }
    };
    
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    
    
    
    
    // Init Config and Tasks
    ///////////////////////////////////////////////////////////////////////////
    grunt.initConfig(config);
    
    grunt.registerTask('default', ['jshint']);
};