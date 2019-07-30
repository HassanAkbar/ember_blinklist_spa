import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:application');
    assert.ok(controller);
  });

  test('user service exists exists', function(assert) {
    let controller = this.owner.lookup('controller:book');
    assert.ok(controller.user);
    assert.equal(controller.user.userId, null);
    assert.equal(controller.user.accessType, null);
  });
});
