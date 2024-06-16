<template>
    <button :class="[theme, icon, 'secondary', {loading: buttonStore.loading, disabled: buttonStore.disabled}]">
        <img v-if="icon && !buttonStore.loading" src="@/assets/right.png" alt="icon" :class="icon">
        <div v-if="buttonStore.loading" class="loader">
            <div class="spinner">
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
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
.secondary {
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

.theme1.secondary {
    background-color: #00924e;
    color: #000;
    border-radius: 10px;
    transition: all 0.2s;
}
.theme1.secondary:hover {
    background-color: #00b25c;
    color: #fff;
    transform: translateX(5px);
}
.theme1.secondary:hover img {
    filter: invert(1);
}

/* THEME 2 */

.theme2.secondary {
    position: relative;
    background-color: transparent;
    color: #000;
    transition: all 0.2s;
    padding: 16px 20px;
    border: 1px solid transparent;
}
.theme2.secondary::after {
    background: #000;
    content: '';
    position: absolute;
    width: 75%;
    height: 1px;
    text-align: center;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.2s;
}
.theme2.secondary:hover {
    transform: translateY(-2px);
}
.theme2.secondary:hover::after {
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

/* LOADING ANIMATION*/
button.loading {
    cursor: wait;
}

.spinner {
 width: max-content;
 letter-spacing: 2px;
 filter: drop-shadow(0 0 10px);
 display: flex;
 justify-content: center;
 align-items: center;
}

.spinner span {
 animation: loading6454 1.75s ease infinite;
}

.spinner span:nth-child(2) {
 animation-delay: 0.1s;
}

.spinner span:nth-child(3) {
 animation-delay: 0.2s;
}

.spinner span:nth-child(4) {
 animation-delay: 0.3s;
}

.spinner span:nth-child(5) {
 animation-delay: .4s;
}

.spinner span:nth-child(6) {
 animation-delay: .5s;
}

.spinner span:nth-child(7) {
 animation-delay: .6s;
}

@keyframes loading6454 {
 0%, 100% {
  transform: translateY(0);
 }

 50% {
  transform: translateY(-5px);
 }
}
</style>
