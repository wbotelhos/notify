describe('#_create', function() {
  'use strict';

  it ('builds the item', function() {
    // given
    var instance = new Notify();

    spyOn(Notify.prototype, '_build').and.callThrough();

    // when
    instance._create();

    // then
    expect(instance._build).toHaveBeenCalled();
  });

  it ('binds the mouseenter', function() {
    // given
    var instance = new Notify();

    spyOn(Notify.prototype, '_bindMouseenter');

    // when
    instance._create();

    // then
    expect(instance._bindMouseenter).toHaveBeenCalled();
  });

  it ('binds the click', function() {
    // given
    var instance = new Notify();

    spyOn(Notify.prototype, '_bindClick');

    // when
    instance._create();

    // then
    expect(instance._bindClick).toHaveBeenCalled();
  });

  context('when :forever is false', function() {
    it ('binds mouseleave', function() {
      // given
      var instance = new Notify({ forever: false });

      spyOn(Notify.prototype, '_bindMouseleave');

      // when
      instance._create();

      // then
      expect(instance._bindMouseleave).toHaveBeenCalled();
    });

    it ('binds schedule for close', function() {
      // given
      var instance = new Notify({ forever: false });

      spyOn(Notify.prototype, '_scheduleClose');

      // when
      instance._create();

      // then
      expect(instance._scheduleClose).toHaveBeenCalled();
    });
  });

  context('when :forever is true', function() {
    it ('does not binds mouseleave', function() {
      // given
      var instance = new Notify({ forever: true });

      spyOn(Notify.prototype, '_bindMouseleave');

      // when
      instance._create();

      // then
      expect(instance._bindMouseleave).not.toHaveBeenCalled();
    });

    it ('does not binds schedule for close', function() {
      // given
      var instance = new Notify({ forever: true });

      spyOn(Notify.prototype, '_scheduleClose');

      // when
      instance._create();

      // then
      expect(instance._scheduleClose).not.toHaveBeenCalled();
    });
  });

  it ('opens the notice', function() {
    // given
    var instance = new Notify({ max: 1 });

    spyOn(Notify.prototype, '_push').and.returnValue(true);
    spyOn(Notify.prototype, '_open');

    // when
    instance._create();

    // then
    expect(instance._open).toHaveBeenCalled();
  });

  it ('sets the noticies position', function() {
    // given
    var instance = new Notify();

    spyOn(Notify.prototype, '_push').and.returnValue(true);
    spyOn(Notify.prototype, '_position');

    // when
    instance._create();

    // then
    expect(instance._position).toHaveBeenCalledWith(instance.opt.position);
  });
});
