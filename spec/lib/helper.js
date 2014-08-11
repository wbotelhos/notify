function context(description, spec) {
  describe(description, spec);
}

beforeEach(function() {
  $.notify.lives = [];
  $.notify.queue = [];
});

afterEach(function() {
  $($.notify.defaults.wrapper).remove();
});
