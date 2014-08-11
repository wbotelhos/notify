describe('#_bindMouseleave', function() {
  'use strict';

  it ('calls :_onMouseleave', function() {
    // given
    var instance = new Notify();

    instance.item = jasmine.createSpyObj('item', ['on']);

    spyOn(instance._onMouseleave, 'bind').and.returnValue('_onMouseleave');

    // when
    instance._bindMouseleave();

    // then
    expect(instance.item.on).toHaveBeenCalledWith('mouseleave.notify', '_onMouseleave');
  });
});
