<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

import { onMounted } from 'vue';

</script>


<template>
  <main class="container mx-auto p-4 pt-8">
    <Header />
    <router-view />
    <Footer />
  </main>
</template>

<style scoped>

</style>