describe('#_push', function() {
  'use strict';

  beforeEach(function() {
    $.notify.lives = [1];
    $.notify.queue  = [];
  });

  context('when lives is full', function() {
    it ('saves the notice on queue', function() {
      // given
      var instance = new Notify({ max: 1 });

      // when
      instance._push();

      // then
      expect($.notify.lives.length).toEqual(1);
      expect($.notify.queue.length).toEqual(1);
    });

    it ('returns false', function() {
      // given
      var instance = new Notify({ max: 1 });

      // when
      var result = instance._push();

      // then
      expect(result).toBeFalsy();
    });
  });

  context('when lives is not full', function() {
    it ('saves the notice on lives', function() {
      // given
      var instance = new Notify({ max: 2 });

      // when
      instance._push();

      // then
      expect($.notify.lives.length).toEqual(2);
      expect($.notify.queue.length).toEqual(0);
    });

    it ('returns true', function() {
      // given
      var instance = new Notify({ max: 2 });

      // when
      var result = instance._push();

      // then
      expect(result).toBeTruthy();
    });
  });
});
