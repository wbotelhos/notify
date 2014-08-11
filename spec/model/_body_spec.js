describe('#_body', function() {
  'use strict';

  it ('returns a <p> element', function() {
    // given
    var instance = new Notify();

    // when
    var el = instance._body();

    // then
    expect(el[0].tagName).toEqual('P');
  });

  it ('uses the *body option as html', function() {
    // given
    var instance = new Notify({ body: '<div>body</div>' });

    // when
    var el = instance._body();

    // then
    var html = el.children()[0];

    expect(html.tagName).toEqual('DIV');
    expect(html.innerHTML).toEqual('body');
  });
});
