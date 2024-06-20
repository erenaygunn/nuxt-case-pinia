<template>
  <NuxtLayout>
    <div>
       <NuxtLink to='/theme1'>Theme 1</NuxtLink> 
       <NuxtLink to='/theme2'>Theme 2</NuxtLink> 
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<style >
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