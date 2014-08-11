describe('#id', function() {
  'use strict';

  it ('changes the body', function() {
    // given

    // when
    var instance = $.notify({
      body : 'body',
      id   : 'id'
    });

    // then
    expect(instance.wrapper.children()[0].className).toEqual('id');
  });
});
