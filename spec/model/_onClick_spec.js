describe('#_onClick', function() {
  'use strict';

  it ('calls :_execute with *close and the given event', function() {
    // given
    var instance = new Notify();

    spyOn(Notify.prototype, '_execute');

    // when
    instance._onClick('evt');

    // then
    expect(instance._execute).toHaveBeenCalledWith('click', ['evt']);
  });

  context('and :click execution returns true', function() {
    context('when :closeClick is true', function() {
      it ('executes :_close', function() {
        // given
        var instance = new Notify({ closeClick: true });

        spyOn(Notify.prototype , '_execute').and.returnValue(true);
        spyOn(Notify.prototype , '_close');

        // when
        instance._onClick();

        // then
        expect(instance._close).toHaveBeenCalled();
      });
    });

    context('when :closeClick is false', function() {
      it ('does not calls :_close', function() {
        // given
        var instance = new Notify({ closeClick: false });

        spyOn(Notify.prototype , '_execute').and.returnValue(true);
        spyOn(Notify.prototype , '_close');

        // when
        instance._onClick();

        // then
        expect(instance._close).not.toHaveBeenCalled();
      });
    });
  });

  context('and :click execution returns false', function() {
    it ('does not calls :_close', function() {
      // given
      var instance = new Notify({ closeClick: true });

      spyOn(Notify.prototype , '_execute').and.returnValue(false);
      spyOn(Notify.prototype , '_close');

      // when
      instance._onClick();

      // then
      expect(instance._close).not.toHaveBeenCalled();
    });
  });
});
