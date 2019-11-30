import Component from '@ember/component';

export default Component.extend({

  init() {
    this._super(...arguments);
    this.chosen = false;
  },

  actions: {
    handleClick() {
      this.set('chosen', true);
    }
  }
});
