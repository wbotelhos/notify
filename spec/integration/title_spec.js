describe('#title', function() {
  'use strict';

  it ('changes the title', function() {
    // given

    // when
    var instance = $.notify({ title: 'title' });

    // then
    var wrapper = instance.wrapper;

    expect(wrapper.find('strong').text()).toEqual('title');
  });
});
