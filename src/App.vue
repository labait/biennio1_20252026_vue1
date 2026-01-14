<script setup>
import About from './components/About.vue'
import Accordion from './components/Accordion.vue';
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue';
import { onMounted } from 'vue';


</script>

<template>
  <main class="container mx-auto p-4 pt-8">
    <About class="mb-4"/>
    <Accordion class="mb-4"/>
    <Projects />
    <Footer />
  </main>
</template>

<style scoped>

</style>