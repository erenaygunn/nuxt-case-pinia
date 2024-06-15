<template>
    <div>
        <h3>Update Button States</h3>
        <label>
            Loading:
            <input type="checkbox" @change="updateLoading" />
        </label>
        <label>
            Disabled:
            <input type="checkbox" @change="updateDisabled" />
        </label>
    </div>
</template>

<script>
import { useButtonStore } from '@/buttonStore';

export default {
    setup() {
        const buttonStore = useButtonStore();

        const updateLoading = (value) => {
            buttonStore.setLoading(event.target.checked);
        };
        const updateDisabled = (value) => {
            buttonStore.setDisabled(event.target.checked);
        };
        
        return {
            updateDisabled,
            updateLoading
        }
    }
}
</script>

<style scoped>
/* Add any required styles here */
</style>
