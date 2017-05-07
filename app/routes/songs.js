import Ember from 'ember';

const Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: '',
});


export default Ember.Route.extend({
  model() {
    let blackDog = Song.create({
      title: 'Black Dog',
      band: 'Led Zeppelin',
      rating: 3,
    });
    let yellowLedbetter = Song.create({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 3,
    });
    let pretender = Song.create({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 5,
    });
    return [blackDog, yellowLedbetter, pretender];
  },
});
