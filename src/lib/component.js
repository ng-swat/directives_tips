/**
 * base class for creating a component directive.
 * set up the defaults: restrict, controllerAs etc..
 */
class Component {

  constructor(controllerFn, template, props= {}) {
    this.controller       = controllerFn;
    this.template         = template;
    this.scope            = props;
    this.restrict         = 'E';
    this.bindToController = true;
    this.controllerAs     = this._extractAlias(controllerFn);
  }

  /**
   * parse the controller name to create
   * an alias.
   * for example: NkLoginCpntroller will become 'NkLogin'
   *
   * @param controllerFn
   * @returns {*}
   * @private
   */
  _extractAlias(controllerFn) {
    return controllerFn.name.split('Controller')[0];
  }
}

export default Component;
