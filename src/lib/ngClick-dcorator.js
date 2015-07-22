function ngClickDecorator($delegate) {
  $delegate[0].transclude = true;
  $delegate[0].template   = '<button class="btn btn-primary" ng-transclude></button>';

  return $delegate;
}

export default angular.module('directives.ngClickDecorator', [])
  .decorator('ngClickDirective', ngClickDecorator)
