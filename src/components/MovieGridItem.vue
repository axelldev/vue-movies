<script setup>
defineProps({
  movie: Object
})
</script>

<template>
  <li class="flex flex-col gap-4 rounded-lg bg-neutral-900 p-8 shadow-lg cursor-pointer">
    <p class="text-center font-bold text-neutral-400">
      {{ movie.title }}
    </p>
    <div>
      <img class="block h-[240px] rounded-lg" :src="movie.poster" :alt="`${movie.title} poster`" />
    </div>
  </li>
</template>
