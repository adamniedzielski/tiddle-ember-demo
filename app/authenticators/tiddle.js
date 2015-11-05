import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  ajax: Ember.inject.service(),

  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(Ember.get(data, 'email')) && !Ember.isEmpty(Ember.get(data, 'token'))) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(email, password) {
    return this.get('ajax').post('/users/sign_in.json', { data: { user: { email, password }}}).
      then(response => {
        return { email, token: response.authentication_token };
      });
  },

  invalidate(data) {
    return this.get('ajax').del('/users/sign_out.json');
  }
});
