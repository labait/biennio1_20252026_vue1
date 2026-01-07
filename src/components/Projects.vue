<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    link: 'https://example.com/portfolio',
    image: 'https://picsum.photos/id/1/800/600'
  },
  {
    id: 2,
    title: 'E-commerce Store',
    description: 'An online store built with Vue.js and Firebase for backend services.',
    link: 'https://example.com/ecommerce',
    image: 'https://picsum.photos/id/2/800/600'
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'A blogging platform with user authentication and content management.',
    link: 'https://example.com/blog',
    image: 'https://picsum.photos/id/3/800/600'
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A blogging platform with user authentication and content management.',
    link: 'https://example.com/blog',
    image: 'https://picsum.photos/id/4/800/600'
  }
])
</script>

<template>
  <div id="projects">
    <div class="font-bold text-2xl">Projects</div>
    <p>Here are some of my recent works.</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div v-for="project in projects" :key="project.id" class="border rounded-lg overflow-hidden shadow-lg">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover"/>
        <div class="p-4">
          <h3 class="font-bold text-xl mb-2">{{ project.title }}</h3>
          <p class="text-gray-700 mb-4">{{ project.description }}</p>
          <a :href="project.link" target="_blank" class="text-blue-500 hover:underline">View Project</a>
        </div>
      </div>
    </div>
  </div>
</template>