/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    // WATCH FILES FOR CHANGES
    watch: {
      options: {
        livereload: true,
      },
      html: {
        files: ['**/*.haml'],
      },
      css: {
        files: ['**/*.scss'],
      },
      images: {
        files: ['public/img/*.png'],
      },
      scripts: {
        files: ['public/js/*.js'],
      },            
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('live-reload', ['watch']);
};
