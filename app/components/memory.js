import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.cards = [1,2,3,4,5,6,7,8];
    this.chosen = [];
    this.solved = [];
  },

  actions: {
    chosenCard(text, pair) {
      if(this.solved.includes(text)) {
        return;
      }
      if (this.chosen.length === 0) {
        this.chosen.push({text, pair});
        return 'chosen';
      } else if (this.chosen[0].text === text && this.chosen[0].pair === pair) {
        this.chosen = [];
      } else if (this.chosen[0].text === text && this.chosen[0].pair !== pair) {
        this.solved.push(this.chosen[0].text, text);
        this.chosen = [];
        return "solved";
      } else {
        this.chosen = [];
      }
    },
  }
});
