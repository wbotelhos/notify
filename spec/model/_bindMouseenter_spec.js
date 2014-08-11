describe('#_bindMouseenter', function() {
  'use strict';

  it ('calls :_onMouseenter', function() {
    // given
    var instance = new Notify();

    instance.item = jasmine.createSpyObj('item', ['on']);

    spyOn(instance._onMouseenter, 'bind').and.returnValue('_onMouseenter');

    // when
    instance._bindMouseenter();

    // then
    expect(instance.item.on).toHaveBeenCalledWith('mouseenter.notify', '_onMouseenter');
  });
});
