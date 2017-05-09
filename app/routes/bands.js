import Ember from 'ember';


let Band = Ember.Object.extend({
  name: '',
  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
});

let Song = Ember.Object.extend({
  title: '',
  rating: 0,
  band: ''
});

export default Ember.Route.extend({
  model: function() {
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
    let daughter = Song.create({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5,
    });

    let ledZeppelin = Band.create({
      name: 'Led Zeppelin',
      songs: [blackDog]
    });

    let pearlJam = Band.create({
      name: 'Pearl Jam',
      songs: [yellowLedbetter, daughter]
    });

    let fooFighters = Band.create({
      name: 'Foo Fighters',
      songs: [pretender]
    });

    return [ledZeppelin, pearlJam, fooFighters];
  },
});
