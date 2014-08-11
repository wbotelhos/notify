describe('#fn_position', function() {
  'use strict';

  it ('changes the position', function() {
    // given
    var instance = new Notify();

    spyOn(instance, '_position');

    // when
    instance.position('position');

    // then
    expect(instance._position).toHaveBeenCalledWith('position');
  });
});
