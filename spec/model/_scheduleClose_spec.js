describe('#_scheduleClose', function() {
  'use strict';

  it ('sets the timeout number on timeout key on instance', function() {
    // given
    var instance = new Notify();

    spyOn(instance, '_timeoutKey').and.returnValue('key');
    spyOn(window, 'setTimeout').and.returnValue('callback');

    // when
    instance._scheduleClose();

    // then
    expect(instance.key).toEqual('callback');
  });
});
