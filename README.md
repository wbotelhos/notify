# jQuery Notify - A Notifier Plugin

[![Build Status](https://img.shields.io/travis/wbotelhos/notify/master.svg)](https://travis-ci.org/wbotelhos/notify "Travis CI")
[![Dependency Status](https://david-dm.org/wbotelhos/notify.svg)](https://david-dm.org/wbotelhos/notify "Dependency Status")
[![Dev Dependency Status](https://david-dm.org/wbotelhos/notify/dev-status.svg)](https://david-dm.org/wbotelhos/notify#info=devDependencies "Dev Dependency Status")
[![Code Climate](https://codeclimate.com/github/wbotelhos/notify.png)](https://codeclimate.com/github/wbotelhos/notify "Code Climate")
[![Support jQuery Notify](http://img.shields.io/gittip/wbotelhos.svg)](https://www.gittip.com/wbotelhos "Git Tip")

## Version

```
@version  0.1.0
@since    2010.08.03
@author   Washington Botelho
@doc      wbotelhos.com/notify
```

## Dependencies

+ jquery.js

## Usage

```html
<link rel="stylesheet" href="jquery.notify.css">
<script src="jquery.notify.js"></script>
```

```js
$.notify('Hello World!');
```

## Usage with Icon

- jquery.notify.[eot|svg|ttf|woff]

```html
<link rel="stylesheet" href="jquery.notify.css">
<link rel="stylesheet" href="jquery.notify.fonts.css">
<script src="jquery.notify.js"></script>
```

```js
$.notify({ body: 'Hello World!', icon: 'notify-info' });
```

## Bower Install

```js
bower install notify
```

See [bower.io](http://bower.io) for more information.

## Options

```js
afterClose   : undefined     // Callback executed after notice closes.
afterOpen    : undefined     // Callback executed after notice opens.
beforeClose  : undefined     // Callback executed before notice closes.
beforeOpen   : undefined     // Callback executed before notice opens.
body         : undefined     // Body of notice.
click        : undefined     // Callback executed when notice is clicked.
closeClick   : true          // If notice will be closed on click.
destroy      : false         // Removes the wrapper when there is no more notice on it.
forever      : false         // If notice will stay on screen forever.
hideTime     : 1000          // Time spent to hide the notice.
icon         : undefined     // Icon (font) name for the notice.
id           : 'notify-item' // Identifier to be used as class on notice.
image        : undefined     // Image path to be used into notice.
max          : 5             // Number maximum of noticies on screen.
minimizeTime : 300           // Time spent to minimize the notice.
mouseout     : undefined     // Callback executed on mouse over the notice.
mouseover    : undefined     // Callback executed on mouse out the notice.
position     : undefined     // The place where notices will appears.
showTime     : 400           // Time spent to show the notice.
timeout      : 5000          // Time spent to initiates the other timeouts.
title        : undefined     // The notice title.
wrapper      : '#notify'     // Where notices will be appended.
```

## Functions

First, save the notice reference:

```js
var notice = $.notify('Hello World!');
```

Then you can use the functions:

```js
notice.remove();               // Removes the notice from screen.

notice.position('class-name'); // Changes the notices position via CSS class.
```

## Global Functions

```js
$.notify.clean('name') // Clean the queue with name equal you passed or all when no name is given.
```

## Contributors

[Check it out](http://github.com/wbotelhos/notify/graphs/contributors)

## Licence

[The MIT License](http://opensource.org/licenses/MIT)

## Love it!

Via [PayPal](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=X8HEP2878NDEG&item_name=jQuery%20Notify) or [Gittip](http://www.gittip.com/wbotelhos). Thanks! (:
