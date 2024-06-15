<template>
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
</template>

<style>
.main {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
  gap: 30px;
}
.container {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 20px;
}

</style>