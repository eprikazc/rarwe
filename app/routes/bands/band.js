import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.modelFor('bands').findBy('slug', params.slug);
  },
});
