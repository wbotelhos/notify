describe('#_onMouseleave', function() {
  'use strict';

  it ('calls :_execute with *mouseout and the given event', function() {
    // given
    var instance = new Notify();

    spyOn(Notify.prototype, '_execute');

    // when
    instance._onMouseleave('evt');

    // then
    expect(instance._execute).toHaveBeenCalledWith('mouseout', ['evt']);
  });

  context('and the :_execute returns true', function() {
    it ('calls :_scheduleClose', function() {
      // given
      var instance = new Notify();

      spyOn(Notify.prototype , '_execute').and.returnValue(true);
      spyOn(Notify.prototype , '_scheduleClose');

      // when
      instance._onMouseleave();

      // then
      expect(instance._scheduleClose).toHaveBeenCalled();
    });
  });

  context('and the :_execute returns false', function() {
    it ('does not calls :_scheduleClose', function() {
      // given
      var instance = new Notify();

      spyOn(Notify.prototype , '_execute').and.returnValue(false);
      spyOn(Notify.prototype , '_scheduleClose');

      // when
      instance._onMouseleave();

      // then
      expect(instance._scheduleClose).not.toHaveBeenCalled();
    });
  });
});
