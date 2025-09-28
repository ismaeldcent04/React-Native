import { movieApi } from "@/core/api/movie-api";
import { CreditsResponse } from "@/infrastructure/interfaces/credits-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getMovieCastByIdAction = async (id: number | string) => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`);

    const cast = data.cast.map((c) => CastMapper.fromMovieDBCastToEntity(c));

    return cast;
  } catch (error) {
    console.log(error);
  }
};
