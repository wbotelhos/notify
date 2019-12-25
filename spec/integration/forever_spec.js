describe('#forever', function() {
  'use strict';

  beforeEach(function() {
    $.fx.off = true;
  });

  afterEach(function() {
    $.fx.off = false;
  });

  context('when false', function() {
    it ('lets the notice disappear', function(done) {
      // given
      var instance = $.notify({
        body         : 'body',
        forever      : false,
        hideTime     : 0,
        minimizeTime : 0,
        showTime     : 0,
        timeout      : 0
      });

      // when

      // then
      setTimeout(function() {
        expect(instance.wrapper.children().length).toEqual(0);
        done();
      }, 500);
    });
  });

  context('when true', function() {
    it ('avoids the notice disappear', function(done) {
      // given
      var instance = $.notify({
        body         : 'body',
        forever      : true,
        hideTime     : 0,
        minimizeTime : 0,
        showTime     : 0,
        timeout      : 0
      });

      // when

      // then
      setTimeout(function() {
        expect(instance.wrapper.children().length).toEqual(1);
        done();
      }, 500);
    });
  });
});
