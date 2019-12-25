# jQuery Notify - A Notifier Plugin

[![Build Status](https://travis-ci.org/wbotelhos/notify.svg)](https://travis-ci.org/wbotelhos/notify)
[![NPM Version](https://badge.fury.io/js/notify.svg)](https://badge.fury.io/js/notify)
[![Dependency](https://david-dm.org/wbotelhos/notify.svg)](https://david-dm.org/wbotelhos/notify)
[![Dev Dependency](https://david-dm.org/wbotelhos/notify/dev-status.svg)](https://david-dm.org/wbotelhos/notify#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/wbotelhos/notify.png)](https://codeclimate.com/github/wbotelhos/notify)
[![Patreon](https://img.shields.io/badge/donate-%3C3-brightgreen.svg)](https://www.patreon.com/wbotelhos)

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
afterClose:    undefined     // Callback executed after notice closes.
afterOpen:     undefined     // Callback executed after notice opens.
beforeClose:   undefined     // Callback executed before notice closes.
beforeOpen:    undefined     // Callback executed before notice opens.
body:          undefined     // Body of notice.
click:         undefined     // Callback executed when notice is clicked.
closeClick:    true          // If notice will be closed on click.
destroy:       false         // Removes the wrapper when there is no more notice on it.
forever:       false         // If notice will stay on screen forever.
hideTime:      1000          // Time spent to hide the notice.
icon:          undefined     // Icon (font) name for the notice.
id:            'notify-item' // Identifier to be used as class on notice.
image:         undefined     // Image path to be used into notice.
max:           5             // Number maximum of noticies on screen.
minimizeTime:  300           // Time spent to minimize the notice.
mouseout:      undefined     // Callback executed on mouse over the notice.
mouseover:     undefined     // Callback executed on mouse out the notice.
position:      undefined     // The place where notices will appears.
showTime:      400           // Time spent to show the notice.
timeout:       5000          // Time spent to initiates the other timeouts.
title:         undefined     // The notice title.
wrapper:       '#notify'     // Where notices will be appended.
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
