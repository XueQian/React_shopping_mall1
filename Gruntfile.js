module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        browserify: {
            options: {
                transform: [require('grunt-react').browserify],
                watch: true
            },
            app: {
                src: ['src/jsx/*.jsx'],
                dest: 'assets/js/scripts.js'
            }
        },

        express: {
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            react: {
                files: 'src/jsx/*.jsx',
                tasks: ['browserify']
            },
            express: {
                files: ['src/js/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },

        eslint: {
            target: [
                //'Gruntfile.js',
                'src/js/*.js'
            ]
        },
        jest: {
            all: {
                config: 'package.json',
                coverage: true,
                testPathPattern: /.*-test.js/
            }
        },
        copy: {
            css: {expand: true, cwd: 'src/css/', src: '*', dest: 'assets/css/', filter: 'isFile'},
            json: {expand: true, cwd: 'src/json/', src: '*', dest: 'assets/json/', filter: 'isFile'},
            html: {expand: true, cwd: 'src/', src: 'index.html', dest: 'assets/', filter: 'isFile'},
            imgs: {expand: true, cwd: 'src/imgs/', src: '*', dest: 'assets/imgs/', filter: 'isFile'}
        },
        clean: ['assets']
    });

    grunt.registerTask('dev', ['clean', 'copy', 'browserify','express', 'watch']);
    grunt.registerTask('test', ['jest']);
};