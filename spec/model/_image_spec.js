describe('#_image', function() {
  'use strict';

  it ('returns a <img> element', function() {
    // given
    var instance = new Notify();

    // when
    var el = instance._image();

    // then
    expect(el[0].tagName).toEqual('IMG');
  });

  it ('uses the *image option as src', function() {
    // given
    var instance = new Notify({ image: 'http://example.org/image.jpg' });

    // when
    var el = instance._image();

    // then
    expect(el[0].src).toEqual('http://example.org/image.jpg');
  });
});
