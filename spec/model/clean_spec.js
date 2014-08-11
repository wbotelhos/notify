describe('#clean', function() {
  'use strict';

  beforeEach(function() {
    $.notify.lives = [1];
    $.notify.queue  = [2];
  });

  context('when called with "queue"', function() {
    it ('clears the queue queue', function() {
      // given

      // when
      $.notify.clean('queue');

      // then
      expect($.notify.lives.length).toEqual(1);
      expect($.notify.queue.length).toEqual(0);
    });
  });

  context('when called with "lives"', function() {
    it ('clears the lives queue', function() {
      // given

      // when
      $.notify.clean('lives');

      // then
      expect($.notify.lives.length).toEqual(0);
      expect($.notify.queue.length).toEqual(1);
    });
  });

  context('when called without parameter', function() {
    it ('clears the lives and queue queues', function() {
      // given

      // when
      $.notify.clean();

      // then
      expect($.notify.lives.length).toEqual(0);
      expect($.notify.queue.length).toEqual(0);
    });
  });
});
