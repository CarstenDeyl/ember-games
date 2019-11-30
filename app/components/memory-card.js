import Component from '@ember/component';

export default Component.extend({

  init() {
    this._super(...arguments);
    this.chosen = false;
    this.solved = false;
    this.flipped = false;
  },

  wrongCard() {
    this.set('flipped', true);
    setTimeout(() => {
      this.set('flipped', false);
    }, 1500)
  },

  actions: {
    chooseCard(){
      this.onChosen(this);
    }
  }
});
