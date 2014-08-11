describe('#notify', function() {
  'use strict';

  it ('is returns the instance', function() {
    // given

    // when
    var instance = $.notify();

    // then
    expect(instance).toEqual(jasmine.any(Notify));
  });

  it ('instantiate a new Notify', function() {
    // given
    var notify = jasmine.createSpyObj('notify', ['_create', '_push']);

    spyOn(Notify.prototype , '_push').and.returnValue(true);
    spyOn(window           , 'Notify').and.returnValue(notify);

    // when
    $.notify('body', 'params');

    // then
    expect(window.Notify).toHaveBeenCalledWith('body', 'params');
  });

  context(':_push is false', function() {
    it ('does not creates the notice', function() {
      // given
      spyOn(Notify.prototype, '_push').and.returnValue(false);
      spyOn(Notify.prototype, '_create');

      // when
      var instance = $.notify();

      // then
      expect(instance._create).not.toHaveBeenCalled();
    });
  });

  context(':_push is true', function() {
    it ('creates the notice', function() {
      // given
       spyOn(Notify.prototype, '_push').and.returnValue(true);
       spyOn(Notify.prototype, '_create');

       // when
      var instance = $.notify();

       // then
      expect(instance._create).toHaveBeenCalled();
    });
  });
});
