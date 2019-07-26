import EmberObject from '@ember/object';
import RequestableMixin from 'blinklist/mixins/requestable';
import { module, test } from 'qunit';

module('Unit | Mixin | requestable', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let RequestableObject = EmberObject.extend(RequestableMixin);
    let subject = RequestableObject.create();
    assert.ok(subject);
  });
});
