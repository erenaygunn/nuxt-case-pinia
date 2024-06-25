<template>
    <button :class="[icon, 'primary', {loading: buttonStore.buttons['Primary']?.loading, disabled: buttonStore.buttons['Primary']?.disabled}]" @click="handleClick">
        <img v-if="icon && !buttonStore.buttons['Primary']?.loading" src="@/assets/right.png" alt="icon" :class="icon">
        <div v-if="buttonStore.buttons['Primary']?.loading" class="loader">
            <div class="scanner">
                <span>Loading...</span>
            </div>
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

        const handleClick = () => {
            buttonStore.handleClick('Primary');
        };

        return {
            buttonStore,
            handleClick
        };
    },
}
</script>

<style>
.primary {
    border: none;
    padding: 14px 17px;
    cursor: pointer;
    background: none;
    display: flex;
    align-items: center;
    gap: 5px;
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

/* LOADING ANIMATION */

button.loading {
    cursor: wait;
}

.scanner span {
  color: transparent;
  position: relative;
  overflow: hidden;
}

.scanner span::before {
  content: "Loading...";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  border-right: 4px solid;
  overflow: hidden;
  animation: load91371 2s linear infinite;
}

@keyframes load91371 {
  0%, 10%, 100% {
    width: 0;
  }

  10%,20%,30%,40%,50%,60%,70%,80%,90%,100% {
    border-right-color: transparent;
  }

  11%,21%,31%,41%,51%,61%,71%,81%,91% {
    border-right-color: inherit;
  }

  60%, 80% {
    width: 100%;
  }
  
}
</style>