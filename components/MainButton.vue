<template>
    <button :class="[theme, {'loading': loading,'disabled': disabled}]" @click="handleClick">
        <span v-if="loading">Loading...</span>
        <span v-else>{{ label }}</span>
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
</style>