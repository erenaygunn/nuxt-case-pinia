<template>
    <div class="app">
      <div class="column">
        <div class="main">
          <div class="container">
            <PrimaryButton>Primary Button</PrimaryButton>
            <PrimaryButton icon="only-icon">Primary Button</PrimaryButton>
            <PrimaryButton icon="left">Primary Button</PrimaryButton>
            <PrimaryButton icon="right">Primary Button</PrimaryButton>
          </div>
          <div class="container">
            <SecondaryButton>Secondary Button</SecondaryButton>
            <SecondaryButton icon="only-icon">Secondary Button</SecondaryButton>
            <SecondaryButton icon="left">Secondary Button</SecondaryButton>
            <SecondaryButton icon="right">Secondary Button</SecondaryButton>
          </div>
          <div class="container">
            <OutlinedButton>Outlined Button</OutlinedButton>
            <OutlinedButton icon="only-icon">Outlined Button</OutlinedButton>
            <OutlinedButton icon="left">Outlined Button</OutlinedButton>
            <OutlinedButton icon="right">Outlined Button</OutlinedButton>
          </div>
        </div>
        <div class="container">
          <StateUpdater />
          <h2>Or Click on Buttons to update states</h2>
        </div>
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