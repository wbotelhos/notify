describe('#_hash', function() {
  'use strict';

  it ('returns a <p> element', function() {
    // given
    var
      date     = new Date(2000, 1, 1),
      instance = new Notify();

    window.Date = function() {
      return date;
    };

    // when
    var hash = instance._hash();

    // then
    expect(hash).toEqual(+date);
  });
});
