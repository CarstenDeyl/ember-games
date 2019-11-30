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
    chosenCard(card) {
      if(card.solved) {
        console.log("already solved");
        return;
      }
      if (this.chosen.length === 0) {
        console.log("chosen");
        card.set("chosen", true);
        this.chosen.push(card);
        return;
      }
      const prevCard = this.chosen[0];
      if (prevCard.text === card.text && prevCard.pair === card.pair) {
        console.log("same");
        card.set("chosen", false);
        this.chosen = [];
      } else if (prevCard.text === card.text && prevCard.pair !== card.pair) {
        console.log("solved");
        prevCard.set('solved', true);
        card.set('solved', true);
        this.chosen = [];
      } else {
        console.log("wrong");
        prevCard.set('chosen', false);
        card.set('chosen', false);
        prevCard.wrongCard();
        card.wrongCard();
        this.chosen = [];
      }
    },
  }
});
