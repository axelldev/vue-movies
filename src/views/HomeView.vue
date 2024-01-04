<script setup>
import { useMovies } from '../composables/useMovies.js'
import MoviesGrid from '@/components/MoviesGrid.vue'
import MovieGridItem from '@/components/MovieGridItem.vue'
import LoaderIcon from '@/components/LoaderIcon.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { movies, loading, handleSubmit } = useMovies()
</script>

<template>
  <header>
    <div class="max-w-5xl mx-auto p-8">
      <h1 class="text-center text-5xl">Movies</h1>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="flex justify-center gap-4">
        <input
          type="text"
          name="search"
          class="focus:border-indigo-400 placeholder:italic placeholder:text-neutral-600 rounded-lg outline-none py-1 px-2 bg-transparent border-2 border-neutral-800"
          placeholder="Search by title"
        />
        <button
          class="px-4 py-2 bg-indigo-400 rounded-lg text-neutral-900 shadow-lg transition-shadow hover:shadow-indigo-500"
        >
          Search
        </button>
      </div>
    </form>
  </header>
  <div v-if="loading" class="flex justify-center p-8">
    <LoaderIcon />
  </div>
  <main v-else>
    <MoviesGrid>
      <MovieGridItem
        @click="router.push(`/movie/${movie.id}`)"
        v-for="movie in movies"
        :movie="movie"
        :key="movie.id"
      />
    </MoviesGrid>
  </main>
</template>
