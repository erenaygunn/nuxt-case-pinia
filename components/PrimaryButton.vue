<template>
    <button class="primary" :class="[theme, icon, {'loading': loading,'disabled': disabled}]" @click="handleClick">
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
.right {
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

/* THEME 2 */

.theme2.primary {
    background-color: #6d6e00;
    color: #f9ffa6;
    transition: all 0.2s;
    padding: 16px 20px;
}
.theme2.primary:hover {
    background-color: #8a8b00;
    color: #f9ffa6;
    transform: scale(1.05);
}
</style>
