import Component from '@ember/component';

export default Component.extend({
  actions: {
    handleClick() {
      this.text = 2;
    }
  }
});
