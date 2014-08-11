describe('#image', function() {
  'use strict';

  it ('addes an image on notice', function() {
    // given

    // when
    var instance = $.notify({
      body  : 'body',
      image : 'http://example.org/image.jpg'
    });

    // then
    expect(instance.wrapper.find('img')[0].src).toEqual('http://example.org/image.jpg');
  });
});
