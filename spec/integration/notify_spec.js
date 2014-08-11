describe('#notify', function() {
  'use strict';

  it ('creates one notice', function() {
    // given

    // when
    var instance = $.notify('body');

    // then
    var items = instance.wrapper.children();

    expect(items.length).toEqual(1);
    expect(items.find('p').text()).toEqual('body');
  });

  it ('appends more than one notice', function() {
    // given

    // when
    $.notify('body 1');

    $.notify('body 2');
    $.notify('body 3');

    // then
    expect($($.notify.defaults.wrapper).children().length).toEqual(3);
  });
});
