/**
 * this is a simple controller that
 * we can inheerit in order to listen to
 * scope destroy event.
 */
class ScopeCleanup {

  constructor(scope) {
    this._scope = scope;
    scope.$on('$destroy', this._cleanup.bind(this));
  }

  _cleanup() {
    console.log(`scope: ${this._scope.$id} has been destroyed!`);
  }
}

export default ScopeCleanup;
