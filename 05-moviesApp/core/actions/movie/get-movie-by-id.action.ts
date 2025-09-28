import { movieApi } from "@/core/api/movie-api";
import {
  CompleteMovie,
  Movie,
} from "@/infrastructure/interfaces/movie.interface";
import { MovieDetailResponse } from "@/infrastructure/interfaces/movieDb-details-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDetailResponse>(`${id}`);

    return MovieMapper.fromTheMovieDbToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
