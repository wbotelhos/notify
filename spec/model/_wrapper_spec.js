describe('#_wrapper', function() {
  'use strict';

  context('when wrapper is already on dom', function() {
    beforeEach(function() {
      this.wrapper = $('<div />', { id: 'some-wrapper', text: 'its me!' }).appendTo('body');
    });

    afterEach(function() {
      this.wrapper.remove();
    });

    it ('is returned as jquery', function() {
      // given
      var instance = new Notify({ wrapper: '#some-wrapper' });

      // when
      var el = instance._wrapper();

      // then
      expect(el.text()).toEqual('its me!');
    });
  });

  context('when wrapper is not on dom', function() {
    it ('is created with id name providd on *wrapper option and appended to body', function() {
      // given
      new Notify({ wrapper: '#missing-wrapper' });

      // when
      var el = $('#missing-wrapper');

      // then
      expect(el.length).toEqual(1);

      el.remove();
    });
  });
});
