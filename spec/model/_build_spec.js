describe('#_build', function() {
  'use strict';

  it ('returns the notice item with body inside', function() {
    // given
    var instance = new Notify();

    // when
    var item = instance._build();

    // then
    expect(item[0].tagName).toEqual('DIV');
    expect(item.children()[0].tagName).toEqual('P');
  });

  context('when *title is provided', function() {
    it ('appends title before the body', function() {
      // given
      var instance = new Notify({ body: 'body', title: 'title' });

      // when
      var elements = instance._build().children();

      // then
      expect(elements[0].tagName).toEqual('STRONG');
      expect(elements[1].tagName).toEqual('P');
    });

    context('when *icon is provided', function() {
      it ('appends icon before the body', function() {
        // given
        var instance = new Notify({ body: 'body', icon: 'icon' });

        // when
        var elements = instance._build().children();

        // then
        var icon = elements[0];

        expect(icon.tagName).toEqual('I');
        expect(icon.className).toEqual('icon');
        expect(elements[1].tagName).toEqual('P');
      });
    });
  });

  context('when *icon is provided', function() {
    it ('sets an class indicating that has an icon on notice', function() {
      // given
      var instance = new Notify({ icon: 'icon' });

      // when
      var item = instance._build();

      // then
      expect(item).toHaveClass('notify-icon');
    });

    context('and *image too', function() {
      it ('gives precedence to icon', function() {
        // given
        var instance = new Notify({ icon: 'icon', image: 'image' });

        // when
        var item = instance._build();

        // then
        expect(item.find('i').length).toEqual(1);
        expect(item.find('img').length).toEqual(0);
      });
    });
  });
});
