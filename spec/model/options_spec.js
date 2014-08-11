describe('#options', function() {
  'use strict';

  it ('has the right default values', function() {
    // given

    // when
    var opt = $.notify.defaults;

    // then
    expect($.notify.lives).toEqual([]);
    expect($.notify.queue).toEqual([]);

    expect(opt.afterClose).toBeUndefined();
    expect(opt.afterOpen).toBeUndefined();
    expect(opt.beforeClose).toBeUndefined();
    expect(opt.beforeOpen).toBeUndefined();
    expect(opt.body).toBeUndefined();
    expect(opt.click).toBeUndefined();
    expect(opt.closeClick).toBeTruthy();
    expect(opt.destroy).toBeFalsy();
    expect(opt.forever).toBeFalsy(false);
    expect(opt.hideTime).toEqual(1000);
    expect(opt.icon).toBeUndefined();
    expect(opt.id).toEqual('notify-item');
    expect(opt.image).toBeUndefined();
    expect(opt.max).toEqual(5);
    expect(opt.minimizeTime).toEqual(300);
    expect(opt.mouseout).toBeUndefined();
    expect(opt.mouseover).toBeUndefined();
    expect(opt.position).toBeUndefined();
    expect(opt.showTime).toEqual(400);
    expect(opt.timeout).toEqual(5000);
    expect(opt.title).toBeUndefined();
    expect(opt.wrapper).toEqual('#notify');
  });
});
