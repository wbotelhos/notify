describe('#position', function() {
  'use strict';

  context('when wrapper is already on dom with some :position', function() {
    beforeEach(function() {
      this.instance = $.notify({ position: 'position' });
    });

    afterEach(function() {
      this.instance.wrapper.remove();
    });

    context('and other notice comes with another :position', function() {
      it ('overrides the first declared position', function() {
        // given

        // when
        $.notify({ position: 'other' });

        // then
        expect(this.instance.wrapper[0].className).toEqual('other');
      });
    });
  });
});
