<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.querySelectorAll('.accordion-title').forEach(title => {
      title.addEventListener('click', () => {
        accordion.querySelectorAll('.accordion-content').forEach(content => {
          content.classList.add('hidden');
        });
        const content = title.nextElementSibling;
        if (content) {
          content.classList.toggle('hidden');
        }
      });
    });
  });
});
</script>

<template>
  <!-- accordion -->
  <div class="accordion">
    <div>
      <button class="accordion-title w-full p-4 cursor-pointer bg-amber-50">Section 1</button>
      <div class="accordion-content hidden">
        <p>This is the content of section 1.</p>
      </div>
    </div>
    <div>
      <button class="accordion-title w-full p-4 cursor-pointer bg-amber-50">Section 1</button>
      <div class="accordion-content hidden">
        <p>This is the content of section 1.</p>
      </div>
    </div>
  </div>
</template>