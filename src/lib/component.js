class Component {

  constructor(controllerFn, template, props= {}) {
    this.controller       = controllerFn;
    this.template         = template;
    this.scope            = props;
    this.restrict         = 'E';
    this.bindToController = true;
    this.controllerAs     = this._extractAlias(controllerFn);
  }

  _extractAlias(controllerFn) {
    return controllerFn.name.split('Controller')[0];
  }

}

export default Component;
