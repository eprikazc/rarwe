import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  isAddButtonDisabled: Ember.computed.not('title'),
  hasSongs: Ember.computed.gt('model.songs.length', 0),
  songCreationStarted: false,
  canCreateSong: Ember.computed.or(
    'hasSongs',
    'songCreationStarted'
  ),
  actions: {
    updateRating(params) {
      let song = params.item,
        rating = params.rating;
      if (rating === song.get('rating')) {
        rating = 0;
      }
      song.set('rating', rating);
      song.save();
    },
    enableSongCreation() {
      this.set('songCreationStarted', true);
    },
  },
});
