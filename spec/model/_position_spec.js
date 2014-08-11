describe('#_position', function() {
  'use strict';

  context('when is an empty string', function() {
    it ('is not applied', function() {
      // given
      var instance = new Notify();

      // when
      instance._position('');

      // then
      expect(instance.wrapper.attr('class')).toBeUndefined();
    });
  });

  context('when is undefined', function() {
    it ('is not applied', function() {
      // given
      var instance = new Notify();

      // when
      instance._position(undefined);

      // then
      expect(instance.wrapper.attr('class')).toBeUndefined();
    });
  });

  context('when is null', function() {
    it ('is not applied', function() {
      // given
      var instance = new Notify();

      // when
      instance._position(null);

      // then
      expect(instance.wrapper.attr('class')).toBeUndefined();
    });
  });

  context('when is a normal name', function() {
    it ('is not applied', function() {
      // given
      var instance = new Notify();

      // when
      instance._position('position');

      // then
      expect(instance.wrapper[0].className).toEqual('position');
    });
  });
});
