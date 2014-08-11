describe('#execute', function() {
  'use strict';

  context('with callback', function() {
    it ('executes the callback with injected parameters', function() {
      // given
      var instance = new Notify({
        name: function(a, b) {
          this.a = a;
          this.b = b;
        }
      });

      // when
      instance._execute.call(instance, 'name', ['a', 'b']);

      // then
      expect(instance.a).toEqual('a');
      expect(instance.b).toEqual('b');
    });

    context('and it is not a function', function() {
      it ('is ignored and does not throws error', function() {
        // given
        var instance = new Notify({
          name: 'not.a.function'
        });

        // when
        var lambda = function() {
          instance._execute.call(instance, 'name');
        };

        // then
        expect(lambda).not.toThrow();
      });
    });

    context('and return is false', function() {
      it ('returns false', function() {
        // given
        var instance = new Notify({
          name: function() {
            return false;
          }
        });

        // when
        var result = instance._execute.call(instance, 'name');

        // then
        expect(result).toBeFalsy();
      });
    });

    context('and return is true', function() {
      it ('closes the notice', function() {
        // given
        var instance = new Notify({
          name: function() {
            return true;
          }
        });

        // when
        var result = instance._execute.call(instance, 'name');

        // then
        expect(result).toBeTruthy();
      });
    });

    context('and return is undefined', function() {
      it ('closes the notice', function() {
        // given
        var instance = new Notify({
          name: function() {}
        });

        // when
        var result = instance._execute.call(instance, 'name');

        // then
        expect(result).toBeTruthy();
      });
    });
  });

  context('without callback', function() {
    it ('returns true', function() {
      // given
      var instance = new Notify();

      // when
      var result = instance._execute.call(instance, 'name');

      // then
      expect(result).toBeTruthy();
    });
  });
});
