describe('#_timeoutKey', function() {
  'use strict';

  it ('gets the timeout key name', function() {
    // given
    var instance = new Notify();

    instance.hash = 'hash';

    // when
    var key = instance._timeoutKey();

    // then
    expect(key).toEqual('notify_hash');
  });
});
