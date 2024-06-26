<template>
    <button :class="[icon, 'outlined', {loading: buttonStore.buttons['Outlined']?.loading, disabled: buttonStore.buttons['Outlined']?.disabled}]">
        <img v-if="icon && !buttonStore.buttons['Outlined']?.loading" src="@/assets/right.png" alt="icon" :class="icon">
        <div v-if="buttonStore.buttons['Outlined']?.loading" class="progress-loader">
            <div class="progress"></div>
        </div>
        <span v-else class="label"><slot></slot></span>
    </button>
</template>

<script>
import { useButtonStore } from '@/store/buttonStore';

export default {
    props: {
        icon: {
            type: String,
            default: ''
        }
    },
    setup() {
        const buttonStore = useButtonStore();

        return {
            buttonStore
        };
    },
}
</script>

<style scoped>
.outlined {
    border: none;
    padding: 14px 17px;
    cursor: pointer;
    background: none;
    display: flex;
    align-items: center;
    gap: 5px;
    border: 1px solid;
}

button img {
    width: 20px;
    display: inline-block;
}

button.left {
    flex-direction: row;
}
button.right {
    flex-direction: row-reverse;
}
button.only-icon .label {
    display: none;
}

/* LOADING ANIMATION*/

button.loading {
    cursor:wait;
}

.progress-loader {
  position: relative;
  width: 50px;
  background: #00000041;
  height: 10px;
  border-radius: 7px;
  margin: auto;
  text-align: center;

}

.progress {
  width: 1px;
  height: 10px;
  border-radius: 7px;
  background: #ffffff;
  transition: 0.5s;
  animation: loading_44 5s cubic-bezier(.4,1.01,1,1) infinite;
}

@keyframes loading_44 {
  0% {
    width: 0%;
  }

  50% {
    width: 100%;
  }

  100% {
    width: 0%;
  }
}
</style>
~/store/buttonStore