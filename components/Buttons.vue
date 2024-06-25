<template>
  <div class="app">
    <div class="column">
      <div class="main">
        <div class="container" v-for="(buttonGroup, index) in groupedButtons" :key="index">
          <Component
            v-for="(button, buttonIndex) in buttonGroup"
            :is="button.type === 'PrimaryButton' ? PrimaryButton
            :button.type === 'SecondaryButton' ? SecondaryButton
            :OutlinedButton"
            :key="buttonIndex"
            :icon="button.icon"
          >
            {{ button.label }}
          </Component>
        </div>
      </div>
      <div class="container">
        <StateUpdater />
        <h2>Or Click on Buttons to update states</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PrimaryButton, SecondaryButton, OutlinedButton } from '#components';

const data = await $fetch('http://localhost:8000/buttons');

const groups = {};

data.forEach((button) => {
  if (!groups[button.type]) {
    groups[button.type] = [];
  }
  groups[button.type].push(button);
});

const groupedButtons = Object.values(groups);

</script>

<style scoped>
.app {
  display: flex;
  align-items: start;
  flex-direction: row;
}

.main {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
}

.column {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.container {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 20px;
}
</style>
