import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';


export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('band');
  },
  actions: {
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    },
    createBand() {
      let name = this.controller.get('name');
      let band = Band.create({name: name});
      this.modelFor('bands').pushObject(band);
      this.controller.set('name', '');
      this.transitionTo('bands.band.songs', band);
    },
  },
});
