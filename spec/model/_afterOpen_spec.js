describe('#_afterOpen', function() {
  'use strict';

  it ('executes the after open', function() {
    // given
    var instance = new Notify();

    spyOn(instance, '_execute');

    // when
    instance._afterOpen(instance);

    // then
    expect(instance._execute).toHaveBeenCalledWith('afterOpen');
  });
});
