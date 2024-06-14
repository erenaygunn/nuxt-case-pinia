<template>
    <button :class="[theme, icon, {'loading': loading,'disabled': disabled}]" @click="handleClick">
        <img v-if="icon && !disabled" src="@/assets/right.png" alt="icon" :class=icon>
        <span v-if="loading">Loading...</span>
        <span v-else class="label">{{ label }}</span>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
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
.primary, .secondary, .outlined {
    border: none;
    padding: 14px 17px;
    cursor: pointer;
    background: none;
    display: flex;
    align-items: center;
}

.outlined {
    border: 2px solid;
}

button img{
    width: 20px;
    display: inline-block;
}

button.left {
    flex-direction: row;
}
button.right {
    flex-direction: row-reverse;
}
button.only-icon .label{
    display: none;
}

/* Theme 1 */

/* For primary button  */
.theme1.primary {
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  transition: all 0.2s;
}
.theme1.primary:hover {
    background-color: #505050;
    color: #fff;
}
.theme1.primary img {
    filter: invert(1);
}

/* For secondary button  */
.theme1.secondary {
  background-color: #00924e;
  color: #000;
  border-radius: 10px;
  transition: all 0.2s;
}
.theme1.secondary:hover {
    background-color: #00b25c;
    color: #000;
}
</style>