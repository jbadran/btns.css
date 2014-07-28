
module.exports = function (grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({

    less: {
      development: {
        files: {
          "css/btns.css":"less/btns.less"
        }
     }
    },

    autoprefixer: {
      single_file: {
        src: "css/btns.css",
        dest: "css/btns.css"
      }
    },

    recess: {
      dist: {
        options: {
          compile: true
        },
        files: {
            'css/btns.css': ['css/btns.css']
        }
      }
    },

    cssmin: {
      min: {
        files: {
          "css/btns.min.css": ["css/btns.css"]
        }
      }
    },

    watch: {
      css: {
        files: "less/*.less",
        tasks: ["less"]
      }
    }
  });
  
  require("load-grunt-tasks")(grunt);

  grunt.registerTask('default', ["less","watch"]);
  grunt.registerTask('build', ["less","autoprefixer","recess","cssmin"]);

};
