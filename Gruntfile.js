module.exports = function(grunt) {
  var jshintConfig = {
    jshintrc: 'true',
    files: {
      src: ['./src/igTruncate.js']
    }
  };

  var uglifyConfig = {
    min: {
      files: {
        './dist/igTruncate.min.js': ['./src/igTruncate.js']
      }
    }
  };

  var copyConfig = {
    main: {
      expand: true,
      src: 'src/*',
      dest: 'dist/',
      flatten: true
    }
  };

  grunt.initConfig({
    jshint: jshintConfig,
    uglify: uglifyConfig,
    copy: copyConfig
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('dist', ['jshint', 'uglify', 'copy']);
}
