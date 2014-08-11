describe('#_show', function() {
  'use strict';

  it ('shows the notice item on *showTime', function() {
    // given
    var instance = new Notify({ showTime: 1 });

    instance.item = $('<div />');

    spyOn(instance.item, 'appendTo').and.returnValue(instance.item);
    spyOn(instance.item, 'fadeIn');

    spyOn(instance._afterOpen, 'bind').and.returnValue('_afterOpen');

    // when
    instance._show();

    // then
    expect(instance.item.fadeIn).toHaveBeenCalledWith(1, '_afterOpen');
  });

  it ('appends the item on wrapper', function() {
    // given
    var instance = new Notify();

    instance.item = $('<div />');

    // when
    instance._show();

    // then
    expect(instance.wrapper.children()).toEqual(instance.item);
  });
});
