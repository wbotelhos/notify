describe('#_unscheduleClose', function() {
  'use strict';

  it ('stops the animation', function() {
    // given
    var
      instance = new Notify(),
      methods  = { stop: null, css: null };

    instance.item = methods;

    spyOn(methods, 'stop').and.returnValue(methods);
    spyOn(methods, 'css').and.returnValue(methods);

    // when
    instance._unscheduleClose();

    // then
    expect(instance.item.stop).toHaveBeenCalled();
  });

  it ('resets the animated properties', function() {
    // given
    var
      instance = new Notify(),
      methods  = { stop: null, css: null };

    instance.item = methods;

    spyOn(methods, 'stop').and.returnValue(methods);
    spyOn(methods, 'css').and.returnValue(methods);

    // when
    instance._unscheduleClose();

    // then
    expect(instance.item.css).toHaveBeenCalledWith({ opacity: '', height: '' });
  });

  it ('clears the timeout', function() {
    // given
    var instance = new Notify();

    instance.item = $('<div />');
    instance.key  = 'value';

    spyOn(instance, '_timeoutKey').and.returnValue('key');
    spyOn(window, 'clearTimeout');

    // when
    instance._unscheduleClose();

    // then
    expect(window.clearTimeout).toHaveBeenCalledWith('value');
  });
});
