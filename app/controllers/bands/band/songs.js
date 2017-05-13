import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  isAddButtonDisabled: Ember.computed.not('title'),
  actions: {
    updateRating(params) {
      let song = params.item,
        rating = params.rating;
      song.set('rating', rating);
    },
  },
});
