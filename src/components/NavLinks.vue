<script setup>

defineProps({
    css_class: {
        type: String,
        default: 'text-xl font-bold cursor-pointer hover:underline'
    }
});

defineEmits(['click']);

const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
];
</script>

<template>
    <router-link v-for="link in links" @click="$emit('click',link)" :class="css_class" :to="link.path">{{ link.name }}</router-link>
</template>