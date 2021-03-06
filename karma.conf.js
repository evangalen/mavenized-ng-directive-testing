// Karma configuration file
// See http://karma-runner.github.io/0.10/config/configuration-file.html
module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // libraries
      'lib/jquery-1.8.1.min.js',
      'lib/angular.js',
      'lib/angular-mocks.js',

      // our app
      'js/*.js',

      // tests
      'test/*.js',

      // templates
      'tpl/*.html'
    ],

    // generate js files from html templates
    preprocessors: {
      'tpl/*.html': 'ng-html2js'

      // WARNING: every "coverage" preprocessor line MUST be commented-out and will be automatically be "uncommented"
      //          when then "target/karma-coverage-....conf.js" files are generated by the Maven POM of this module
//      ,'js/*.js': 'coverage'
    },

    coverageReporter: {
      type : 'html',
      dir : 'target/karma-coverage'
    },

    autoWatch: true,
    browsers: ['Chrome']

    // will be automatically uncommented when the "target/karma-coverage-lcov.conf.js" file is generated;
    // required to make the coverage support of the Jetbrains Karma plugin (of WebStorm 7 / IntelliJ IDEA 13) working
//    ,reporters: ['coverage']
  });
};
