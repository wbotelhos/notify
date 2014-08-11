describe('#pipe', function() {
  'use strict';

  var piped = jasmine.createSpyObj('item', ['_create']);

  beforeEach(function() {
    $.notify.lives = [1, 2];
    $.notify.queue  = [piped, 4];
  });

  it ('pops from queue and pushs to lives', function() {
    // given
    var instance = new Notify();

    // when
    instance._pipe();

    // then
    expect($.notify.lives).toEqual([2, piped]);
    expect($.notify.queue).toEqual([4]);
  });

  it ('opens the piped item', function() {
    // given
    var instance = new Notify();

    // when
    instance._pipe();

    // then
    expect(piped._create).toHaveBeenCalled();
  });
});
