describe('#icon', function() {
  'use strict';

  it ('addes an icon on notice', function() {
    // given

    // when
    var instance = $.notify({
      body : 'body',
      icon : 'icon'
    });

    // then
    expect(instance.wrapper.find('i')[0].className).toEqual('icon');
  });
});
