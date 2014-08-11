# jQuery Notify - A Notifier Plugin - http://wbotelhos.com/notify

## 0.1.0

### News

- Bower supported;
- JS Hint validation;
- Package.json on it;
- Tested with Jasmine.

#### Options

`afterClose` to be executed after notice closes.
`afterOpen` to be executed after notice opens.
`beforeClose` to be executed before close notice. Return `false` will prevent it;
`beforeOpen` to be executed before notice opens. Return `false` will prevent it;
`body` to choose the notice body;
`closeClick` to be possible close the notice with click;
`forever` to avoid the notice disappear;
`hideTime` to choose time in milliseconds to hide the notice;
`icon` to choose some icon on the left of notice;
`id` to change the name used to identify each notice item;
`image` to choose some image on the left of notice;
`minimizeTime` to choose the time in milliseconds to minimize the notice;
`position` to choose where notices will appears.
`showTime` to choose time in milliseconds to show the notice;
`timeout` to choose the time in milliseconds before `hideTime` starts;
`title` to choose the title of the notice;
`wrapper` to choose, or create, the wrapper where notices will be appended.

#### Functions

`close` to close the current notice instance;
`position` to change the position of noticies via class name.

#### Global Functions

`$.notify.clean()` to clean the queues `queue`, `lives` or both.
