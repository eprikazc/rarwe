import Ember from 'ember';

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
      let song = this.store.createRecord('song', {
        band: band,
        title: title,
      });
      song.save()
        .then(() => {
          this.controller.set('title', '');
        });
    },
  },
});
