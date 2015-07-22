/**
 * add a template and transclude
 * to the built-in ngClick directive
 *
 * @param $delegate
 * @returns {*}
 */
function ngClickDecorator($delegate) {
  $delegate[0].transclude = true;
  $delegate[0].template   = '<button class="btn btn-primary" ng-transclude></button>';

  return $delegate;
}

/**
 * register the decorator
 */
export default angular.module('directives.ngClickDecorator', [])
  .decorator('ngClickDirective', ngClickDecorator)
