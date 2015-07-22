import nkLoginTemplate from 'directives/nk-login/nk-login.html';

function nkLoginDirective() {
  return {
    restrict: 'E',
    template: nkLoginTemplate,
    controller: NkLoginController,
    controllerAs: 'NkLogin',
    bindToController: true
  };
}

class NkLoginController {

  login({ username, password }) {
    console.log(username, password);
  }
}

export default angular.module('directives.nkLogin', [])
  .directive('nkLogin', nkLoginDirective);
