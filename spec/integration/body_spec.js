describe('#body', function() {
  'use strict';

  it ('changes the body', function() {
    // given

    // when
    var instance = $.notify('body');

    // then
    expect(instance.wrapper.find('p').text()).toEqual('body');
  });
});
