import { defineStore } from 'pinia';

export const useButtonStore = defineStore('buttonStore', {
  state: () => ({
    disabled: false,
    loading: false
  }),
  actions: {
    setDisabled(value) {
        this.disabled = value;
    },
    setLoading(value) {
        this.loading = value;
    }
  }
});
