import Component from '@ember/component';

export default Component.extend({

  init() {
    this._super(...arguments);
    this.chosen = false;
    this.solved = false;
  },

  actions: {
    chooseCard(){
      const resp = this.onChosen(this.text, this.pair);
      console.log(resp);
      switch (resp) {
        case "chosen":
          console.log('chosen');
          this.set("chosen", true);
          break;
        case "solved":
          console.log('solved');
          this.set("solved", true);
          break;
        default:
          console.log('wrong');
          this.set("chosen", false);
          break;
      }
    }
  }
});
