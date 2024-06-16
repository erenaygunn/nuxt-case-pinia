<template>
    <button :class="[theme, icon, 'primary', {loading: buttonStore.loading, disabled: buttonStore.disabled}]">
        <img v-if="icon && !buttonStore.loading" src="@/assets/right.png" alt="icon" :class="icon">
        <div v-if="buttonStore.loading" class="loader">
            <div class="scanner">
                <span>Loading...</span>
            </div>
        </div>
        <span v-else class="label"><slot></slot></span>
    </button>
</template>

<script>
import { useButtonStore } from '@/buttonStore';

export default {
    props: {
        icon: {
            type: String,
            default: ''
        },
        theme: {
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

/* THEME 1 */

.theme1.primary {
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    transition: all 0.2s;
}
.theme1.primary:hover {
    background-color: #505050;
    color: #01c268;
    transform: translateX(5px);
}
.theme1.primary img {
    filter: invert(1);
}

.theme1.primary .scanner span::before {
    border-right: 4px solid #fff;
    color: #fff;
}

.theme1.primary.disabled {
    background-color: #505050;
    color: #fff;
    cursor: not-allowed;
    opacity: 0.8;
}
.theme1.primary.disabled:hover, .theme1.primary.loading:hover {
    transform: none;
}

.theme1.primary.loading:hover {
    background-color: #000;
}

/* THEME 2 */

.theme2.primary {
    background-color: #6d6e00;
    color: #f9ffa6;
    transition: all 0.2s;
    padding: 16px 30px;
}
.theme2.primary:hover {
    background-color: #8a8b00;
    color: #f9ffa6;
    transform: scale(1.05);
}

.theme2.primary img {
    filter: invert(1);
}

.theme2.primary .scanner span::before {
    border-right: 4px solid #f9ffa6;
    color: #f9ffa6;
}

.theme2.primary.disabled {
    background-color: #8a8b00;
    color: #f9ffa6;
    cursor: not-allowed;
    opacity: 0.8;
}

.theme2.primary.disabled:hover, .theme2.primary.loading:hover {
    transform: none;
}

.theme2.primary.loading:hover {
    background-color: #6d6e00;
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
