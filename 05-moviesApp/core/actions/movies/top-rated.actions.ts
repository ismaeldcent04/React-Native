import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infrastructure/interfaces/movie-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const topRatedMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/top_rated");
    const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
