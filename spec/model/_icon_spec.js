describe('#_icon', function() {
  'use strict';

  it ('returns a <i> element', function() {
    // given
    var instance = new Notify();

    // when
    var el = instance._icon();

    // then
    expect(el[0].tagName).toEqual('I');
  });

  it ('uses the *icon option as class', function() {
    // given
    var instance = new Notify({ icon: 'class' });

    // when
    var el = instance._icon();

    // then
    expect(el[0].className).toEqual('class');
  });
});
