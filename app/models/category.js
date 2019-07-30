import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  book_ids: DS.hasMany('book', { async: true, inverse: 'category_id' }),

});
