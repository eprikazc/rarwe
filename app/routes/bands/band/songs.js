import Ember from 'ember';
import Song from '../../../models/band';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('bands.band');
  },
  actions: {
    createSong() {
      let band = this.controller.get('model');
      let title = this.controller.get('title');
      let song = Song.create({
        band: band,
        title: title,
      });
      band.get('songs').pushObject(song);
      this.controller.set('title', '');
    },
    updateRating(params) {
      let song = params.item,
        rating = params.rating;
      song.set('rating', rating);
    },
  },
});
