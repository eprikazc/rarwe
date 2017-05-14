import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function(model, transition) {
    if (!Ember.isEmpty(model.get('description'))) {
      this.transitionTo('bands.band.details', model);
    } else {
      this.transitionTo('bands.band.songs', model);
    }
  },
});
