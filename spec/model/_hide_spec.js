describe('#_minimize', function() {
  'use strict';

  it ('animates the notice item with opacity in minimizeTime', function() {
    // given
    var
      bindSpy  = jasmine.createSpy('bind'),
      instance = new Notify({ minimizeTime: 1 });

    instance._close.bind = bindSpy.and.returnValue('_close');
    instance.item        = jasmine.createSpyObj('item', ['animate']);

    // when
    instance._minimize();

    // then
    expect(instance.item.animate).toHaveBeenCalledWith({ height: 0 }, 1, '_close');
  });

  it ('bind is called with "this" as context', function() {
    // given
    var
      bindSpy  = jasmine.createSpy('bind'),
      instance = new Notify();

    instance._close.bind = bindSpy.and.returnValue('_close');
    instance.item        = jasmine.createSpyObj('item', ['animate']);

    // when
    instance._minimize();

    // then
    expect(bindSpy).toHaveBeenCalledWith(instance);
  });
});
