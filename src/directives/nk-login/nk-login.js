import nkLoginTemplate from 'directives/nk-login/nk-login.html';
import ScpoeCleanup    from 'lib/scope-cleanup';
import Component       from 'lib/component';

/**
 * using pre-defined firectives types for
 * rapid development
 */
function nkLoginDirective() {
  return new Component(NkLoginController, nkLoginTemplate, {submitText: '@'});
}

/**
 * beacuse bindToController set to true,
 * each attribute that we passed is binded
 * to the controller instance (this).
 *
 * on this directive, you can pass the submit button text.
 *
 * this controller is also extend the 'ScopeCleanup' class,
 * whice listen to the '$destroy' event and prints
 *
 */
class NkLoginController extends ScpoeCleanup  {

  /**
   * inject the $scope and pass it to the
   * base class.
   *
   * @param $scope
   */
  constructor($scope) {
    super($scope)
  }

  /**
   * prints the user name and passoword
   *
   * @param username
   * @param password
   */
  login({ username, password }) {
    console.log(username, password);
  }
}

/**
 * resgister the directive
 */
export default angular.module('directives.nkLogin', [])
  .directive('nkLogin', nkLoginDirective);
