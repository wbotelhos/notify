describe('#checkWrapper', function() {
  'use strict';

  context('when has item inside wrapper', function() {
    it ('does not removes the wrapper', function() {
      // given
      var instance = new Notify();

      instance.wrapper.html('<div>item</div>');

      instance.item = jasmine.createSpyObj('item', ['remove']);

      spyOn(instance.wrapper, 'remove');

      // when
      instance._checkWrapper();

      // then
      expect(instance.wrapper.remove).not.toHaveBeenCalled();
    });
  });

  context('when has no item inside wrapper', function() {
    it ('removes the wrapper', function() {
      // given
      var instance = new Notify();

      instance.wrapper.empty();

      instance.item = jasmine.createSpyObj('item', ['remove']);

      spyOn(instance.wrapper, 'remove');

      // when
      instance._checkWrapper();

      // then
      expect(instance.wrapper.remove).toHaveBeenCalledWith();
    });
  });
});
