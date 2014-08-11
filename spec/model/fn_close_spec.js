describe('#fn_close', function() {
  'use strict';

  it ('closes the item', function() {
    // given
    var instance = new Notify('body');

    spyOn(instance, '_close');

    // when
    instance.close();

    // then
    expect(instance._close).toHaveBeenCalled();
  });
});
