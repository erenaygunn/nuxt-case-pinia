import { defineStore } from 'pinia';

export const useButtonStore = defineStore('buttonStore', {
  state: () => ({
    buttons: {
      Primary: { disabled: false, loading: false },
      Secondary: { disabled: false, loading: false },
      Outlined: { disabled: false, loading: false }
    }
  }),
  actions: {
    setDisabled(buttonType, value) {
      if (this.buttons[buttonType]) {
        this.buttons[buttonType].disabled = value;
      }
    },
    setLoading(buttonType, value) {
      if (this.buttons[buttonType]) {
        this.buttons[buttonType].loading = value;
      }
    },
    async handleClick(buttonType) {
      if (!this.buttons[buttonType]?.loading && !this.buttons[buttonType]?.disabled) {
        this.setLoading(buttonType, true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        this.setLoading(buttonType, false);
        this.setDisabled(buttonType, true);
      }
    }
  }
});
