import Ember from 'ember';
import Song from '../../../models/band';

export default Ember.Route.extend({
  resetController(controller) {
    controller.set('songCreationStarted', false);
  },
  actions: {
    didTransition() {
      let band = this.modelFor('bands.band').get('name');
      document.title = `${band} - songs`;
    },
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
  },
});
