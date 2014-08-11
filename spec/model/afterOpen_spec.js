describe('#afterOpen', function() {
  'use strict';

  context('with callback', function() {
    it ('executes the callback', function() {
      // given
      var instance = new Notify({
        afterOpen: function() {
          this.called = true;
        }
      });

      // when
      instance._afterOpen.call(instance);

      // then
      expect(instance.called).toBeTruthy();
    });

    context('and it is not a function', function() {
      it ('is ignored and does not throws error', function() {
        // given
        var instance = new Notify({
          afterOpen: 'not.a.function'
        });

        // when
        var lambda = function() {
          instance._afterOpen();
        };

        // then
        expect(lambda).not.toThrow();
      });
    });
  });

  context('without callback', function() {
    it ('is ignored and does not throws error', function() {
      // given
      var instance = new Notify();

      // when
      var lambda = function() {
        instance._afterOpen();
      };

      // then
      expect(lambda).not.toThrow();
    });
  });
});

