import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  image_url: DS.attr('string'),
  category_id: DS.belongsTo('category', { async: true, inverse: 'book_ids' }),
  title: DS.attr('string'),
  content: DS.attr('string'),

  firstHalfContent: computed('content', function() {
    let content = this.get('content').split(". ");
    return `${content.slice(0, content.length / 3).join(". ")}.`;

  }),

  secondHalfContent: computed('content', function() {
    let content = this.get('content').split(". ");
    return `${content.slice(content.length / 3 + 1, content.length * 2/3).join(". ")}.`;

  }),

  thirdHalfContent: computed('content', function() {
    let content = this.get('content').split(". ");
    return `${content.slice((content.length * 2/3) + 1, content.length).join(". ")}.`;

  }),

  books: computed('category_id', function() {
    return this.get('store').peekAll('book').filter((item) => {
      return item.category_id.get('id') == this.get('category_id');
    });
  }),
});
