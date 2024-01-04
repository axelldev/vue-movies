import { ref } from 'vue'
import { fetchMovies } from '../api/movies'

export function useMovies() {
  const movies = ref([])
  const loading = ref(false)
  const error = ref(null)

  const handleSubmit = (e) => {
    const formData = new FormData(e.target)
    const { search } = Object.fromEntries(formData)
    if (!search) {
      return
    }
    loading.value = true
    fetchMovies(search)
      .then((data) => {
        movies.value = data
      })
      .catch((err) => (error.value = err))
      .finally(() => (loading.value = false))
  }

  return { movies, loading, error, handleSubmit }
}
