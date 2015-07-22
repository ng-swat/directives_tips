import stopWatchTemplate from 'directives/stopwatch/stopwatch.html';
import stopWatchStyle    from 'directives/stopwatch/stopwatch.less';
import stopWatchConfig   from 'directives/stopwatch/stopwatch.json';

/**
 * the directive factory function that return
 * the Directive definition object (DDO).
 * note! this directive import a JSON configuration file
 * and use it to initialize the controls attribute
 *
 * @returns {{restrict: string, template, controller, controllerAs: string}}
 */
function stopWatchDirective() {
  return {
    restrict: 'E',
    template: stopWatchTemplate,
    controller: StopWatchController,
    controllerAs: 'StopWatch'
  };
}

/**
 * the stopwatch business logic.
 */
class StopWatchController{

  constructor($interval) {
    this.$interval   = $interval;
    this.controls    = stopWatchConfig.controls;
    this.startTime   = 0;
    this.offset      = 0;
    this.second      = 0;
    this.minute      = 0;
    this.currentTime = null;
    this.running     = false;
  }

  start() {
    if (!this.running) {
      this.startTime = new Date().getTime();
      this._interval = this.$interval(this._updateTime.bind(this), 1000, 0, true);
      this.running   = true;
    }
  }

  stop() {
    if (!this.running) {
      return;
    }

    this._updateTime();
    this.offset  = this.offset + this.currentTime - this.startTime;
    this.running = false;
    this.$interval.cancel(this._interval);
  }

  reset() {
    this.startTime = new Date().getTime();
    this.second    = this.minute = this.offset = 0;
  }

  _updateTime() {
    this.currentTime = new Date().getTime();
    this.second += 1;

    if (this.second === 10) {
      this.second = 0;
      this.minute += 1;
    }

    if (this.minute === 10) {
      this.minute = 0;
    }
  }
}

/**
 * register the directive on a module
 */
export default angular.module('directives.stopWatch', [])
  .directive('stopWatch', stopWatchDirective);
