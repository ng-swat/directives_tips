/**
 * directive execution order demo
 * logs on each step
 *
 * @returns {{controller, compile: Function}}
 */
function dummyDirective() {
  return {
    controller: dummyController,
    compile: () => {
      console.log('dummy directive compiled!');

      return () => {
        console.log('dummy directive linked!');
      }
    }
  }
}

class dummyController {

  constructor() {
    console.log('dummy Controller executed!');
  }

}

export default angular.module('directives.dummy', [])
  .directive('dummy', dummyDirective)
