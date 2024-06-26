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

    async handleClick(buttonType, event) {
      buttonType = buttonType.slice(0, -6)
      

      if (event?.action) {
        const action = event.action;

        if (action === 'state') {
          const targetState = event.targetState;
          
          if (targetState === 'loading') {
            this.setLoading(buttonType, true);
            await new Promise(resolve => setTimeout(resolve, 2000));
            this.setLoading(buttonType, false);
          } 

          else if (targetState === 'disabled') {
            this.setDisabled(buttonType, true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            this.setDisabled(buttonType, false);
          }
        } 
        else if (action === 'alert') {
          alert(event.message);
        }
      }
    }
  }
});
