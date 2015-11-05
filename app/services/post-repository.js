import Ember from 'ember';
import _ from 'lodash/lodash';

export default Ember.Service.extend({
  FIXTURES: [
    {
      id: 1,
      title: "Some random title"
    },
    {
      id: 2,
      title: "Another silly blog post"
    },
    {
      id: 3,
      title: "Why should I care?"
    },
    {
      id: 4,
      title: "And yet another one to fill the space"
    }
  ],

  findAll: function() {
    return this.get('FIXTURES');
  },

  findById: function(id) {
    return _.findWhere(this.get('FIXTURES'), { id: parseInt(id) });
  }
});
