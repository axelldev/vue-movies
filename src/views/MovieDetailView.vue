<script setup>
import { ref, watchEffect } from 'vue'
import { getMovieById } from '../api/movies'
import LoaderIcon from '@/components/LoaderIcon.vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const movie = ref(null)
const error = ref(null)
const loading = ref(false)

watchEffect(() => {
  const { id } = route.params
  if (!id) return
  loading.value = true
  getMovieById(id)
    .then((data) => {
      movie.value = data
    })
    .catch((err) => (error.value = err))
    .finally(() => (loading.value = false))
})
</script>

<template>
  <div class="h-screen max-w-5xl p-8 mx-auto flex flex-col justify-center items-center">
    <LoaderIcon v-if="loading" />
    <div v-else-if="movie">
      <button class="bg-neutral-900 px-4 py-2 rounded-xl my-2 font" @click="router.back">
        Back
      </button>
      <section class="bg-neutral-900 p-8 rounded-3xl">
        <div class="flex gap-4">
          <img
            :src="movie.poster"
            :alt="`${movie.title} poster`"
            class="block rounded-lg shadow-lg"
          />
          <section class="flex flex-col gap-2">
            <h3 class="text-2xl font-bold">{{ movie.title }}</h3>
            <div>
              <div>
                <span class="font-bold text-green-300">Director:</span> {{ movie.director }}
              </div>
              <div><span class="font-bold text-green-300">Year:</span> {{ movie.year }}</div>
            </div>
            <p>
              {{ movie.plot }}
            </p>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>
