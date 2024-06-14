<template>
  <h2>Theme 1</h2>
  <div class="main">
    <div class="container">
      <MainButton theme="theme1" class="primary" label="Primary Button"/>
      <MainButton theme="theme1" class="primary" label="Primary Button" icon=""/>
      <MainButton theme="theme1" class="primary" label="Primary Button" :disabled="true"/>
      <MainButton theme="theme1" class="primary" label="Primary Button" :loading="true"/>
    </div>
    <div class="container">
      <MainButton theme="theme1" class="secondary" label="Secondary Button"/>
      <MainButton theme="theme1" class="secondary" label="Secondary Button" :disabled="true"/>
      <MainButton theme="theme1" class="secondary" label="Secondary Button" :loading="true"/>
    </div>
    <div class="container">
      <MainButton theme="theme1" class="outlined" label="Outlined Button"/>
      <MainButton theme="theme1" class="outlined" label="Outlined Button" :disabled="true"/>
      <MainButton theme="theme1" class="outlined" label="Outlined Button" :loading="true"/>
    </div>
  </div>
</template>

<script>
</script>

<style>
.main {
  display: flex;
  align-items: start;
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