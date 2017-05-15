import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    willTransition(transition) {
      if (this.controller.get('isEditing')) {
        if (window.confirm('You are editing. Are you sure?')) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    },
  }
});
