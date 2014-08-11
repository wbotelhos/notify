describe('#_item', function() {
  'use strict';

  it ('returns a <div> element', function() {
    // given
    var instance = new Notify();

    // when
    var el = instance._item();

    // then
    expect(el[0].tagName).toEqual('DIV');
  });

  it ('uses the *id option as class', function() {
    // given
    var instance = new Notify({ id: 'id' });

    // when
    var el = instance._item();

    // then
    expect(el[0].className).toEqual('id');
  });
});
