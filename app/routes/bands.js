import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('band');
  },
  actions: {
    didTransition() {
      document.title = 'Bands - Rock & Roll';
    },
    createBand() {
      let band = this.store.createRecord('band', this.controller.getProperties('name'));
      band.save()
        .then(
          () => {
            this.controller.set('name', '');
            this.transitionTo('bands.band.songs', band);
          });
    },
  },
});
