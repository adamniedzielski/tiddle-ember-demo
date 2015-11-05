import Ember from 'ember';

export default Ember.Route.extend({
  postRepository: Ember.inject.service(),

  model: function() {
    return this.get('postRepository').findAll();
  }
});
