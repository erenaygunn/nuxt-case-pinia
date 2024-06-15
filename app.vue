<template>
  <h2>Theme 1</h2>
  <div class="main">
    <div class="container">
      <MainButton theme="theme1" class="primary" label="Primary Button"/>
      <MainButton theme="theme1" class="primary" label="Primary Button" icon="only-icon"/>
      <MainButton theme="theme1" class="primary" label="Primary Button" icon="left"/>
      <MainButton theme="theme1" class="primary" label="Primary Button" icon="right"/>
    </div>
    <div class="container">
      <MainButton theme="theme1" class="secondary" label="Secondary Button"/>
      <MainButton theme="theme1" class="secondary" label="Secondary Button" icon="only-icon"/>
      <MainButton theme="theme1" class="secondary" label="Secondary Button" icon="left"/>
      <MainButton theme="theme1" class="secondary" label="Secondary Button" icon="right"/>
    </div>
    <div class="container">
      <MainButton theme="theme1" class="outlined" label="Outlined Button"/>
      <MainButton theme="theme1" class="outlined" label="Outlined Button" icon="only-icon"/>
      <MainButton theme="theme1" class="outlined" label="Outlined Button" icon="left"/>
      <MainButton theme="theme1" class="outlined" label="Outlined Button" icon="right"/>
    </div>
  </div>
  <h2>Theme 2</h2>
  <div class="main">
    <div class="container">
      <MainButton theme="theme2" class="primary" label="Primary Button"/>
      <MainButton theme="theme2" class="primary" label="Primary Button" icon="only-icon"/>
      <MainButton theme="theme2" class="primary" label="Primary Button" icon="left"/>
      <MainButton theme="theme2" class="primary" label="Primary Button" icon="right"/>
    </div>
    <div class="container">
      <MainButton theme="theme2" class="secondary" label="Secondary Button"/>
      <MainButton theme="theme2" class="secondary" label="Secondary Button" icon="only-icon"/>
      <MainButton theme="theme2" class="secondary" label="Secondary Button" icon="left"/>
      <MainButton theme="theme2" class="secondary" label="Secondary Button" icon="right"/>
    </div>
    <div class="container">
      <MainButton theme="theme2" class="outlined" label="Outlined Button"/>
      <MainButton theme="theme2" class="outlined" label="Outlined Button" icon="only-icon"/>
      <MainButton theme="theme2" class="outlined" label="Outlined Button" icon="left"/>
      <MainButton theme="theme2" class="outlined" label="Outlined Button" icon="right"/>
    </div>
  </div>
</template>

<script>
</script>

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