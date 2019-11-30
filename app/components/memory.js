import Component from '@ember/component';

export default Component.extend({
  init() {
    this._super(...arguments);
    const cardsContent = [1,2,3,4,5,6,7,8];
    this.cards = [];
    for (const cardContent of cardsContent) {
      for (let j = 0; j < 2; j++) {
        this.cards.push({text: cardContent, pair: j});
        this.shuffle(this.cards);
      }
    }
    this.chosen = [];
    this.solved = [];
  },

  shuffle(array) {
    for(let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random());
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
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
