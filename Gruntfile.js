// Gruntfile.js
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jekyll: {
            options: {
                config: '_config.yml',
                watch: true
            },

            serve: {
                options: {
                    serve: true
                }
            }
        },
        watch: {
            files: [
                '_includes/*.html',
                '_layouts/*.html',
                'css/*.css',
                '_config.yml',
                '*.html'
            ],
            tasks: [
                'concat',
                'cssmin',
                'shell:jekyllServe'
            ],
            options: {
                spawn: false,
                interrupt: true,
                atBegin: true,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['jekyll']);
};
