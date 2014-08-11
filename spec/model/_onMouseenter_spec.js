describe('#_onMouseenter', function() {
  'use strict';

  it ('executes :_execute method with *mouseover option and the given event', function() {
    // given
    var instance = new Notify();

    spyOn(Notify.prototype, '_execute');

    // when
    instance._onMouseenter('evt');

    // then
    expect(instance._execute).toHaveBeenCalledWith('mouseover', ['evt']);
  });

  context('and the execution returns true', function() {
    it ('executes :_unscheduleClose', function() {
      // given
      var instance = new Notify();

      spyOn(Notify.prototype , '_execute').and.returnValue(true);
      spyOn(Notify.prototype , '_unscheduleClose');

      // when
      instance._onMouseenter();

      // then
      expect(instance._unscheduleClose).toHaveBeenCalled();
    });
  });

  context('and the execution returns false', function() {
    it ('does not calls :_unscheduleClose', function() {
      // given
      var instance = new Notify();

      spyOn(Notify.prototype , '_execute').and.returnValue(false);
      spyOn(Notify.prototype , '_unscheduleClose');

      // when
      instance._onMouseenter();

      // then
      expect(instance._unscheduleClose).not.toHaveBeenCalled();
    });
  });
});
