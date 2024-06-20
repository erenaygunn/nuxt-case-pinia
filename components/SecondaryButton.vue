<template>
    <button :class="[icon, 'secondary', {loading: buttonStore.buttons['Secondary']?.loading, disabled: buttonStore.buttons['Secondary']?.disabled}]" @click="handleClick">
        <img v-if="icon && !buttonStore.buttons['Secondary']?.loading" src="@/assets/right.png" alt="icon" :class="icon">
        <div v-if="buttonStore.buttons['Secondary']?.loading" class="loader">
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
            buttonStore.handleClick('Secondary');
        };

        return {
            buttonStore,
            handleClick
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
~/store/buttonStore