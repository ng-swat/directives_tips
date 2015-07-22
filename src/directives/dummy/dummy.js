/**
 * an example to the directive lifecycle.
 * log a messege on each phase.
 *
 * @returns {{controller, compile: Function}}
 */
function dummyDirective() {
  return {
    controller: dummyController,

    compile: () => {
      // the compile function will run first
      console.log('dummy directive compiled!');

      return () => {
        // this is the link function. will execute agter the controller
        console.log('dummy directive linked!');
      }
    }
  }
}

/**
 * log to the console when construced
 */
class dummyController {

  constructor() {
    console.log('dummy Controller executed!');
  }
}

/**
 * register the directive on a module
 */
export default angular.module('directives.dummy', [])
  .directive('dummy', dummyDirective)
