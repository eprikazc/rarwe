import Ember from 'ember';

export default Ember.Controller.extend({
  isAddButtonDisabled: Ember.computed.not('name'),
});
