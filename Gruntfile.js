module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        browserify: {
            options: {
                transform: [require('grunt-react').browserify],
                watch: true
            },
            app: {
                src: ['src/jsx/**/*.jsx'],
                dest: 'assets/js/scripts.js'
            }
        },

        express: {
            dev: {
                options: {
                    script: 'src/js/app.js'
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
    });

    grunt.registerTask('dev', ['express', 'watch']);
    grunt.registerTask('test', ['jest']);
};