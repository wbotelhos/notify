describe('#_title', function() {
  'use strict';

  it ('returns a <strong> element', function() {
    // given
    var instance = new Notify();

    // when
    var el = instance._title();

    // then
    expect(el[0].tagName).toEqual('STRONG');
  });

  it ('uses the *title option as html', function() {
    // given
    var instance = new Notify({ title: '<div>title</div>' });

    // when
    var el = instance._title();

    // then
    var html = el.children()[0];

    expect(html.tagName).toEqual('DIV');
    expect(html.innerHTML).toEqual('title');
  });
});
