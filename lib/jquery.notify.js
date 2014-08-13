function Notify(options, params) {
  'use strict';

  if (typeof(options) === 'string') {
    params      = params || {};
    params.body = options;
    options     = params;
  }

  this.opt     = $.extend(true, {}, $.notify.defaults, options);
  this.wrapper = this._wrapper();
  this.hash    = this._hash();
}

Notify.prototype._afterOpen = function() {
  'use strict';

  this._execute('afterOpen');
};

Notify.prototype._bindClick = function() {
  'use strict';

  this.item.on('click.notify', this._onClick.bind(this));
};

Notify.prototype._bindMouseenter = function() {
  'use strict';

  this.item.on('mouseenter.notify', this._onMouseenter.bind(this));
};

Notify.prototype._bindMouseleave = function() {
  'use strict';

  this.item.on('mouseleave.notify', this._onMouseleave.bind(this));
};

Notify.prototype._body = function() {
  'use strict';

  return $('<p />', { html: this.opt.body });
};

Notify.prototype._build = function() {
  'use strict';

  var item = this._item();

  if (this.opt.icon) {
    item.addClass('notify-icon').append(this._icon());
  } else if (this.opt.image) {
    item.addClass('notify-image').append(this._image());
  }

  if (this.opt.title) {
    item.append(this._title());
  }

  return item.append(this._body());
};

Notify.prototype._checkWrapper = function() {
  'use strict';

  if (!this.wrapper.children().length) {
    this.wrapper.remove();
  }
};

Notify.prototype._close = function(evt) {
  'use strict';

  if (this._execute('beforeClose', [evt])) {
    this.item.remove();

    this._pipe();

    if (this.opt.destroy) {
      this._checkWrapper();
    }

    this._execute('afterClose');
  }
};

Notify.prototype._create = function() {
  'use strict';

  this.item = this._build();

  this._bindClick();
  this._bindMouseenter();

  if (!this.opt.forever) {
    this._scheduleClose();
    this._bindMouseleave();
  }

  this._position(this.opt.position);
  this._open();
};

Notify.prototype._execute = function(name, args) {
  'use strict';

  var execute;

  if ($.isFunction(this.opt[name])) {
    execute = this.opt[name].apply(this, args);
  }

  return execute || execute === undefined;
};

Notify.prototype._hash = function() {
  'use strict';

  return +new Date();
};

Notify.prototype._hide = function() {
  'use strict';

  this.item.animate({ opacity: 0 }, this.opt.hideTime, this._minimize.bind(this));
};

Notify.prototype._icon = function() {
  'use strict';

  return $('<i />', { 'class': this.opt.icon });
};

Notify.prototype._image = function() {
  'use strict';

  return $('<img />', { src: this.opt.image });
};

Notify.prototype._item = function() {
  'use strict';

  return $('<div />', { 'class': this.opt.id });
};

Notify.prototype._minimize = function() {
  'use strict';

  this.item.animate({ height: 0 }, this.opt.minimizeTime, this._close.bind(this));
};

Notify.prototype._onClick = function(evt) {
  'use strict';

  if (this._execute('click', [evt]) && this.opt.closeClick) {
    this._close();
  }
};

Notify.prototype._onMouseenter = function(evt) {
  'use strict';

  if (this._execute('mouseover', [evt])) {
    this._unscheduleClose();
  }
};

Notify.prototype._onMouseleave = function(evt) {
  'use strict';

  if (this._execute('mouseout', [evt])) {
    this._scheduleClose();
  }
};

Notify.prototype._open = function() {
  'use strict';

  if (this._execute('beforeOpen')) {
    this._show();
  }
};

Notify.prototype._pipe = function() {
  'use strict';

  $.notify.lives.shift();

  var piped = $.notify.queue.shift();

  if (piped) {
    $.notify.lives.push(piped);
    piped._create();
  }
};

Notify.prototype._push = function() {
  'use strict';

  var ok = $.notify.lives.length < this.opt.max;

  if (ok) {
    $.notify.lives.push(this);
  } else {
    $.notify.queue.push(this);
  }

  return ok;
};

Notify.prototype._scheduleClose = function() {
  'use strict';

  this[this._timeoutKey()] = setTimeout(this._hide.bind(this), this.opt.timeout);
};

Notify.prototype._show = function() {
  'use strict';

  var that = this;

  that.item
  .appendTo(that.wrapper)
  .fadeIn(that.opt.showTime, this._afterOpen.bind(this));
};

Notify.prototype._timeoutKey = function() {
  'use strict';

  return 'notify_' + this.hash;
};

Notify.prototype._title = function() {
  'use strict';

  return $('<strong />', { html: this.opt.title });
};

Notify.prototype._position = function(position) {
  'use strict';

  if (position) {
    this.wrapper[0].className = position;
  }
};

Notify.prototype._unscheduleClose = function() { // TODO: CHAge to unschedule
  'use strict';

  clearTimeout(this[this._timeoutKey()]);

  this.item.stop().css({ opacity: '', height: '' });
};

Notify.prototype._wrapper = function() {
  'use strict';

  var wrapper = $(this.opt.wrapper);

  if (!wrapper.length) {
    return $('<div />', { id: this.opt.wrapper.slice(1) }).appendTo('body');
  }

  return wrapper;
};

Notify.prototype.close = function() {
  'use strict';

  this._close();
};

Notify.prototype.position = function(position) {
  'use strict';

  this._position(position);
};

(function($) {
  'use strict';

  $.notify = function(options, params) {
    var notify = new Notify(options, params);

    if (notify._push()) {
      notify._create();
    }

    return notify;
  };

  $.notify.clean = function(name) {
    if (!name || name === 'queue') {
      $.notify.queue = [];
    }

    if (!name || name === 'lives') {
      $.notify.lives = [];
    }
  };

  $.notify.queue = [];
  $.notify.lives = [];

  $.notify.defaults = {
    afterClose   : undefined,
    afterOpen    : undefined,
    beforeClose  : undefined,
    beforeOpen   : undefined,
    body         : undefined,
    click        : undefined,
    closeClick   : true,
    destroy      : false,
    forever      : false,
    hideTime     : 1000,
    icon         : undefined,
    id           : 'notify-item',
    image        : undefined,
    max          : 5,
    minimizeTime : 300,
    mouseout     : undefined,
    mouseover    : undefined,
    position     : undefined,
    showTime     : 400,
    timeout      : 5000,
    title        : undefined,
    wrapper      : '#notify'
  };
})(jQuery);
