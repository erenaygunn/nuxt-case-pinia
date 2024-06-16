<template>
    <button :class="[theme, icon, 'outlined', {loading: buttonStore.buttons['Outlined']?.loading, disabled: buttonStore.buttons['Outlined']?.disabled}]" @click="handleClick">
        <img v-if="icon && !buttonStore.buttons['Outlined']?.loading" src="@/assets/right.png" alt="icon" :class="icon">
        <div v-if="buttonStore.buttons['Outlined']?.loading" class="progress-loader">
            <div class="progress"></div>
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

        const handleClick = () => {
            buttonStore.handleClick('Outlined');
        };

        return {
            buttonStore,
            handleClick
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

/* THEME 1 */

.theme1.outlined {
    color: #000;
    border-radius: 10px;
    transition: all 0.2s;
    border: 1px solid #000;
}
.theme1.outlined:hover {
    color: #fff;
    background-color: #000;
    transform: translateX(5px);
}
.theme1.outlined:hover img {
    filter: invert(1);
}

.theme1 .progress {
    background: #00924e;
}

.theme1.outlined.disabled {
    border-color: #636363d0;
    color: #636363d0;
    cursor: not-allowed;
}

.theme1.outlined.disabled:hover, .theme1.outlined.loading:hover {
    transform: none;
    background-color: transparent;
}

.theme1.outlined.disabled:hover img {
    filter: none;
}

/* THEME 2 */

.theme2.outlined {
    color: #000;
    transition: all 0.4s;
    border: #6d6e00 1px solid;
}
.theme2.outlined:hover {
    border-radius: 40px;
    transform: translateY(-2px);
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
}

.theme2 .progress {
    background: #6d6e00;
}

.theme2.outlined.disabled {
    color: #636363d0;
    cursor: not-allowed;
    opacity: 0.8;
    border-color: #636363d0;
}

.theme2.outlined.disabled:hover, .theme2.outlined.loading:hover {
    transform: none;
    box-shadow: none;
    border-radius: unset;
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
