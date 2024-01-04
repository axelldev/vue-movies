const BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function fetchMovies(search) {
  try {
    const resp = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${search}`)
    const data = await resp.json()
    return data.Search?.map((movie) => ({
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster
    }))
  } catch (err) {
    console.log(err)
    throw new Error('Error loading movies')
  }
}

export async function getMovieById(id) {
  try {
    const resp = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`)
    const data = await resp.json()
    return {
      id: data.imdbID,
      title: data.Title,
      director: data.Director,
      actors: data.Actors,
      poster: data.Poster,
      plot: data.Plot,
      year: data.Year
    }
  } catch (err) {
    console.log(err)
    throw new Error('Error loading movies')
  }
}
