<template>
  <div class="app">
    <div class="column">
      <h2>Theme 1</h2>
      <div class="main">
        <div class="container">
          <PrimaryButton theme="theme1">Primary Button</PrimaryButton>
          <PrimaryButton theme="theme1" icon="only-icon">Primary Button</PrimaryButton>
          <PrimaryButton theme="theme1" icon="left">Primary Button</PrimaryButton>
          <PrimaryButton theme="theme1" icon="right">Primary Button</PrimaryButton>
        </div>
        <div class="container">
          <SecondaryButton theme="theme1">Secondary Button</SecondaryButton>
          <SecondaryButton theme="theme1" icon="only-icon">Secondary Button</SecondaryButton>
          <SecondaryButton theme="theme1" icon="left">Secondary Button</SecondaryButton>
          <SecondaryButton theme="theme1" icon="right">Secondary Button</SecondaryButton>
        </div>
        <div class="container">
          <OutlinedButton theme="theme1">Outlined Button</OutlinedButton>
          <OutlinedButton theme="theme1" icon="only-icon">Outlined Button</OutlinedButton>
          <OutlinedButton theme="theme1" icon="left">Outlined Button</OutlinedButton>
          <OutlinedButton theme="theme1" icon="right">Outlined Button</OutlinedButton>
        </div>
      </div>
      <h2>Theme 2</h2>
      <div class="main">
        <div class="container">
          <PrimaryButton theme="theme2">Primary Button</PrimaryButton>
          <PrimaryButton theme="theme2" icon="only-icon">Primary Button</PrimaryButton>
          <PrimaryButton theme="theme2" icon="left">Primary Button</PrimaryButton>
          <PrimaryButton theme="theme2" icon="right">Primary Button</PrimaryButton>
        </div>
        <div class="container">
          <SecondaryButton theme="theme2">Secondary Button</SecondaryButton>
          <SecondaryButton theme="theme2" icon="only-icon">Secondary Button</SecondaryButton>
          <SecondaryButton theme="theme2" icon="left">Secondary Button</SecondaryButton>
          <SecondaryButton theme="theme2" icon="right">Secondary Button</SecondaryButton>
        </div>
        <div class="container">
          <OutlinedButton theme="theme2">Outlined Button</OutlinedButton>
          <OutlinedButton theme="theme2" icon="only-icon">Outlined Button</OutlinedButton>
          <OutlinedButton theme="theme2" icon="left">Outlined Button</OutlinedButton>
          <OutlinedButton theme="theme2" icon="right">Outlined Button</OutlinedButton>
        </div>
      </div>
    </div>
    <div class="state">
      <StateUpdater />
      <h2>Or Click on Buttons to update states</h2>
    </div>
  </div>
</template>

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