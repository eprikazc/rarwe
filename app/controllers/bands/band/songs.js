import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  isAddButtonDisabled: Ember.computed.not('title'),
  noSongs: Ember.computed.equal('model.songs.length', 0),
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
      song.set('rating', rating);
    },
    enableSongCreation() {
      this.set('songCreationStarted', true);
    },
  },
});
