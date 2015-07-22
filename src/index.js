import angular   from 'angular';
import style     from 'index.less'

import stopWatch from 'directives/stopwatch/stopwatch';
import nkLogin   from 'directives/nk-login/nk-login';
import dummy     from 'directives/dummy/dummy';
import nkClick   from 'lib/ngClick-dcorator';

angular.module('directives.tips', [
  dummy.name,
  nkLogin.name,
  stopWatch.name,
  nkClick.name
])
  // put a method on the rootScope for
  // demo purpose only
  .run($rootScope => {
    $rootScope.print = () => console.log('clicked!')
  });

/**
 * bootstrap Angular application
 */
angular.element(document).ready( () => {
  angular.bootstrap(document, ['directives.tips']);
});

