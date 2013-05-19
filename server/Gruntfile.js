/*global module:false*/
module.exports = function(grunt) {
    
    var config = {};
    
    // JSHINT
    ///////////////////////////////////////////////////////////////////////////
    config.connect = {
        server: {
            port: 1111,
            base: '../public/',
            keepAlive: true
        }
    };
    
    grunt.loadNpmTasks('grunt-connect');
    
    
    
    // Init Config and Tasks
    ///////////////////////////////////////////////////////////////////////////
    grunt.initConfig(config);
    
    grunt.registerTask('default', ['connect:server']);
};