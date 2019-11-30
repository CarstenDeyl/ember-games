import Component from '@ember/component';

export default Component.extend({
  text: 1,

  actions: {
    handleClick() {
      this.text = 2;
    }
  }
});
