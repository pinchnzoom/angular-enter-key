# pz-enter-key - Allow enter key on condition

## Angular Enter Key , was designed... 
To what: Conditionally call a function on pressing enter.

To how: By providing a second argument as a condition to call a function

To why: Because nesting forms within forms, sometimes you don't want to submit or calidate.

### Installation

In your Angular project, run `bower install --save pz-enter-key` to save the
module. Then, in your HTML, add:

``` html
<script src="/path/to/bower_components/pz-enter-key/dist/index.min.js"></script>
```

And nextly, in your Angular module, include `pz.enterKey` as a dependency:

``` javascript
angular.module('my-app', ['pz.enterKey'])
```

And Lastly, add the '.needsclick' class for elements that you want to avoid using fastclick functionality.
``` html
<any pz-enter-key="[vm.function.toCall(), {{ ( condition } }} ]"></any>
```



