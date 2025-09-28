import { movieApi } from "@/core/api/movie-api";
import { MoviesDBResponse } from "@/infrastructure/interfaces/movie-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const popularMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MoviesDBResponse>("/popular", {
      params: {
        page: page,
      },
    });
    const movies = data.results.map(MovieMapper.fromTheMovieDbToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
