import angular   from 'angular';
import style     from 'index.less'

import stopWatch from 'directives/stopwatch/stopwatch';
import nkLogin   from 'directives/nk-login/nk-login';
import dummy     from 'directives/dummy/dummy';
import nkClick   from 'lib/ngClick-dcorator';

angular.module('directives.tips', [
  dummy.name
  //nkLogin.name
  //stopWatch.name,
  //nkClick.name
])
  .run($rootScope => {
    $rootScope.print = () => console.log('clicked!')
  });

angular.bootstrap(document, ['directives.tips']);
