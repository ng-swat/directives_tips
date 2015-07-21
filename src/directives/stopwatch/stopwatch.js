import stopWatchTemplate from 'directives/stopwatch/stopwatch.html';
import stopWatchStyle    from 'directives/stopwatch/stopwatch.less';

function stopWatchDirective() {
  return {
    restrict: 'E',
    template: stopWatchTemplate,
    controller: StopWatchController,
    controllerAs: 'stopWatch'
  };
}

class StopWatchController {

  constructor($interval) {
    this.$interval   = $interval;
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

export default angular.module('directives.stopWatch', [])
  .directive('stopWatch', stopWatchDirective);
