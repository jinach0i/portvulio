<script setup>
import Header from './components/Header.vue';
import Container from './components/Container.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div id="App">
    <Header />
    <Container />
    <Footer />
  </div>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
