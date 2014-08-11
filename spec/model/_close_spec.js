describe('#_close', function() {
  'use strict';

  it ('calls before close with event', function() {
    // given
    var instance = new Notify({
      beforeClose: function() {}
    });

    spyOn(instance, '_execute');

    // when
    instance._close('evt');

    // then
    expect(instance._execute).toHaveBeenCalledWith('beforeClose', ['evt']);
  });

  context('when before close returns false', function() {
    it ('does not closes the item', function() {
      // given
      var instance = new Notify({
        beforeClose: function() {
          return false;
        }
      });

      spyOn(instance, 'close');
      spyOn(instance, '_execute').and.returnValue(false);

      // when
      instance._close();

      // then
      expect(instance.close).not.toHaveBeenCalled();
    });
  });

  context('when before close returns true', function() {
    it ('removes the item', function() {
      // given
      var instance = new Notify({
        beforeClose: function() {
          return true;
        }
      });

      instance.item = jasmine.createSpyObj('item', ['remove']);

      spyOn(instance , '_checkWrapper'); // as_null_object
      spyOn(instance , '_execute').and.returnValue(true);

      // when
      instance._close();

      // then
      expect(instance.item.remove).toHaveBeenCalled();
    });

    it ('calls after close', function() {
      // given
      var instance = new Notify({
        beforeClose: function() {
          return true;
        }
      });

      instance.item = jasmine.createSpyObj('item', ['remove']);

      spyOn(instance, '_execute').and.returnValue(true);

      // when
      instance._close();

      // then
      expect(instance._execute).toHaveBeenCalledWith('afterClose');
    });

    context('when destroy is true', function() {
      it ('checks the wrapper to destroy it', function() {
        // given
        var instance = new Notify({ destroy: true });

        instance.item = jasmine.createSpyObj('item', ['remove']);

        spyOn(instance , '_checkWrapper');

        // when
        instance._close();

        // then
        expect(instance._checkWrapper).toHaveBeenCalled();
      });
    });
  });
});
