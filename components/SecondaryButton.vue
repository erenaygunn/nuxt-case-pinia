<template>
    <button class="secondary" :class="[theme, icon, {'loading': loading,'disabled': disabled}]" @click="handleClick">
        <img v-if="icon && !disabled" src="@/assets/right.png" alt="icon" :class="icon">
        <span v-if="loading">Loading...</span>
        <span v-else class="label"><slot></slot></span>
    </button>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        theme: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleClick() {
            if (!this.loading && !this.disabled) {
                // Handle button click logic here
            }
        }
    }
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
</style>
