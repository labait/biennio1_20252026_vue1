<script setup>
import Nav from './components/Nav.vue';
import About from './components/About.vue'
import Accordion from './components/Accordion.vue';
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue';
import { onMounted } from 'vue';


</script>


<template>
  <main class="container mx-auto p-4 pt-8">
    <Nav />
    <router-view />
    <Footer />
  </main>
</template>

<style scoped>

</style>