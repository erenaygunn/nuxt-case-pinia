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
    gap: 5px;
}

.outlined {
    border: 1px solid;
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

/* THEME 1 */

/* For primary button  */
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

/* For secondary button  */
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

/* For outlined button  */
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

/* For primary button  */
.theme2.primary {
  background-color: #6d6e00;
  color: #f9ffa6;
  transition: all 0.2s;
  padding: 16px 20px
}
.theme2.primary:hover {
    background-color: #8a8b00;
    color: #f9ffa6;
    transform: scale(1.05);
}

/* For secondary button  */
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
.theme2.secondary:hover{
    transform: translateY(-2px);
}
.theme2.secondary:hover::after{
    width: 5px;
    height: 5px;
    border-radius: 50%;
}

/* For outlined button  */
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