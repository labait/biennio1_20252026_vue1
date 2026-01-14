<script setup>
import { ref, onMounted } from 'vue';
import NavLinks from './NavLinks.vue';

onMounted(() => {
  const hamburger = document.querySelector('.hamburger');
  const offCanvasMenu = document.getElementById('menu-off-canvas');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    offCanvasMenu.classList.toggle('is-active');
  });
});

</script>


<template>
  <div class=" min-h-20">
    <nav class="hidden md:flex gap-4 items-center justify-center mb-8">
      <NavLinks />
    </nav>
    
    
    <div id="menu-hamburger" class="md:hidden absolute top-4 right-4 z-10 scale-150">
      <button class="hamburger hamburger--3dx" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    
    <div id="menu-off-canvas" class=" bg-cyan-500  flex items-center justify-center w-screen h-screen absolute top-0">
      <nav class="gap-4 flex flex-col items-center justify-center mb-8">
        <NavLinks />
      </nav>
    </div>
  </div>
</template>

<style scoped>
  #menu-off-canvas {
    left: 100vw;
    transition: all 0.3s ease-in-out;
  }

  #menu-off-canvas.is-active {
    left: 0;
    
  }
</style>
  