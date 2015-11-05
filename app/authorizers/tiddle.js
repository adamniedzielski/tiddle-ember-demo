import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(sessionData, block) {
    const headers = {
      "X-USER-EMAIL": Ember.get(sessionData, 'email'),
      "X-USER-TOKEN": Ember.get(sessionData, 'token')
    };

    block(headers);
  }
});
