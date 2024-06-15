<template>
    <button class="outlined" :class="[theme, icon, {'loading': loading,'disabled': disabled}]" @click="handleClick">
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
}
.theme1.outlined:hover {
    color: #fff;
    background-color: #000;
    transform: translateX(5px);
}
.theme1.outlined:hover img {
    filter: invert(1);
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
</style>
