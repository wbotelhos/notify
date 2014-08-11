describe('#closeClick', function() {
  'use strict';

  context('when is false', function() {
    it ('does not removes the notice from screen', function() {
      // given
      var instance = $.notify({
        closeClick : false,
        body       : 'body'
      });

      expect(instance.wrapper.children().length).toEqual(1);

      // when
      instance.wrapper.children(':first').trigger('click');

      // then
      expect(instance.wrapper.children().length).toEqual(1);
    });
  });

  context('when is true', function() {
    it ('removes the notice from screen', function() {
      // given
      var instance = $.notify({
        closeClick : true,
        body       : 'body'
      });

      expect(instance.wrapper.children().length).toEqual(1);

      // when
      instance.wrapper.children(':first').trigger('click');

      // then
      expect(instance.wrapper.children().length).toEqual(0);
    });
  });
});
