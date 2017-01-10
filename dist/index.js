// reset-field directive - Google search-style X buttons in input boxes
'use strict';
/*
____ _  _ ___ ____ ____    _  _ ____ _   _
|___ |\ |  |  |___ |__/ __ |_/  |___  \_/
|___ | \|  |  |___ |  \    | \_ |___   |
*/ // add type="button" to buttons, will not calidate forms, also a directive for just returns/enters
// use array to pass in 2nd argument as condition to enable
angular.module('pz.enterKey',[]).directive('pzEnterKey', function($parse) {
  return {
    link: function(scope, el, attrs) {
      var fn = $parse(attrs['pzEnterKey']);

      el.on('keydown keypress', function(e){
        var grabattrs = attrs.pzEnterKey;
        var cond = grabattrs.split(',');
        cond = cond[cond.length-1];
        var okToEnter = grabattrs.includes('true');

        var keyPressed = e.keyCode;

        if ((keyPressed === 13) && (okToEnter)) {
            scope.$apply(function(){
              fn(scope);
            });
        } else {
            return true;
        }
      });
    }
  }
});
