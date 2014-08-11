module.exports = function(config) {
  config.set({
    preprocessors : {
      '../lib/*.js'        : ['jshint'],
      './integration/*.js' : ['jshint'],
      './model/*.js'       : ['jshint']
    },
    browsers      : ['Firefox'],
    files         : ['../vendor/*.js', '../lib/*.css', '../lib/*.js', 'lib/*.js', 'model/options_spec.js', '**/*spec.js' ],
    frameworks    : ['jasmine'],
    logLevel      : config.LOG_ERROR,
    reporters     : ['dots'],
    singleRun     : true
    // ,
    // jshint        : {
    //   options: {
    //     indent: 4,
    //     browser: true
    //   },
    //   summary: true
    // }
  });
};
