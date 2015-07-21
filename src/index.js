import jQuery  from 'jquery';
import angular from 'angular';
import style   from 'index.less'

import stopWatch from 'directives/stopwatch/stopwatch';
import nkLogin   from 'directives/nk-login/nk-login';

angular.module('directives.tips', [
  stopWatch.name,
  nkLogin.name
]);

angular.bootstrap(document, ['directives.tips']);
