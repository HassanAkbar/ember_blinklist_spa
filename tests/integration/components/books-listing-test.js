import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | books-listing', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{books-listing}}`);

    assert.equal(this.element.textContent.trim(), 'Nothing found');

    // Template block usage:
    await render(hbs`
      {{#books-listing}}
        template block text
      {{/books-listing}}
    `);

    assert.equal(this.element.textContent.trim(), 'Nothing found');
  });
});
