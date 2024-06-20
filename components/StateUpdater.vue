<template>
    <div>
        <h3>Update Button States</h3>
        <label>
            Button Type:
            <select v-model="selectedButtonType">
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="Outlined">Outlined</option>
            </select>
        </label>
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
import { useButtonStore } from '@/store/buttonStore';

export default {
    setup() {
        const buttonStore = useButtonStore();
        const selectedButtonType = ref('Primary');

        const updateLoading = (event) => {
            buttonStore.setLoading(selectedButtonType.value, event.target.checked);
        };

        const updateDisabled = (event) => {
            buttonStore.setDisabled(selectedButtonType.value, event.target.checked);
        };

        return {
            selectedButtonType,
            updateLoading,
            updateDisabled
        };
    }
}
</script>
~/store/buttonStore