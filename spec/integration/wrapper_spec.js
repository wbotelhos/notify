describe('#wrapper', function() {
  'use strict';

  context('when wrapper does not exists', function() {
    beforeEach(function() {
      this.wrapper = '#missing';
    });

    afterEach(function() {
      $(this.wrapper).remove();
    });

    it ('creates one', function() {
      // given

      // when
      var instance = $.notify({
        body    : 'body',
        wrapper : this.wrapper
      });

      // then
      expect($(instance.wrapper).length).toEqual(1);
    });

    it ('holds all notices', function() {
      // given

      // when
      var instance = $.notify({
        body    : 'body',
        wrapper : this.wrapper
      });

      // then
      expect($(instance.wrapper).children().length).toEqual(1);
    });
  });

  context('when wrapper exists', function() {
    beforeEach(function() {
      this.wrapper = 'container';

      $('<div />', { id: this.wrapper }).appendTo('body');
    });

    afterEach(function() {
      $(this.wrapper).remove();
    });

    it ('uses the existent one to hold the notices', function() {
      // given

      // when
      var instance = $.notify({
        body    : 'body',
        wrapper : this.wrapper
      });

      // then
      expect($(instance.wrapper).children().length).toEqual(1);
    });
  });
});
