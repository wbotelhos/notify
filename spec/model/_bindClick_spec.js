describe('#_bindClick', function() {
  'use strict';

  it ('calls on click function', function() {
    // given
    var instance = new Notify();

    instance.item = jasmine.createSpyObj('item', ['on']);

    spyOn(instance._onClick, 'bind').and.returnValue('_onClick');

    // when
    instance._bindClick();

    // then
    expect(instance.item.on).toHaveBeenCalledWith('click.notify', '_onClick');
  });
});
