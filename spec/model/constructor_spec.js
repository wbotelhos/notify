describe('#constructor', function() {
  'use strict';

  it ('caches the variables', function() {
    // given

    // when
    var instance = new Notify('body');

    // then
    expect(instance.opt).not.toBeUndefined();
    expect(instance.wrapper).not.toBeUndefined();
    expect(instance.hash).not.toBeUndefined();
  });

  context('when the first parameter is the options', function() {
    it ('uses it as options', function() {
      // given
      var instance = new Notify({ body: 'body' });

      // when
      var opt = instance.opt;

      // then
      expect(opt.body).toEqual('body');
    });
  });

  context('when the first parameter is a string', function() {
    it ('uses it as the *body option and initialize the params as an empty hash', function() {
      // given
      var instance = new Notify('body');

      // when
      var opt = instance.opt;

      // then
      expect(opt.body).toEqual('body');
    });

    context('and params is provided as second parameter', function() {
      it ('merges the body into params and set it as options', function() {
        // given
        var instance = new Notify('body', { title: 'title' });

        // when
        var opt = instance.opt;

        // then
        expect(opt.title).toEqual('title');
      });
    });
  });
});
