describe('#_open', function() {
  'use strict';

  it ('calls before open', function() {
    // given
    var instance = new Notify({
      beforeOpen: function() {}
    });

    spyOn(instance, '_execute');

    // when
    instance._open();

    // then
    expect(instance._execute).toHaveBeenCalledWith('beforeOpen');
  });

  context('when before open returns false', function() {
    it ('does not shows the item', function() {
      // given
      var instance = new Notify({
        beforeOpen: function() {
          return false;
        }
      });

      spyOn(instance, '_show');
      spyOn(instance, '_execute').and.returnValue(false);

      // when
      instance._open();

      // then
      expect(instance._show).not.toHaveBeenCalled();
    });
  });

  context('when before open returns true', function() {
    it ('shows the item', function() {
      // given
      var instance = new Notify({
        beforeOpen: function() {
          return true;
        }
      });

      spyOn(instance, '_show');
      spyOn(instance, '_execute').and.returnValue(true);

      // when
      instance._open();

      // then
      expect(instance._show).toHaveBeenCalled();
    });
  });
});
