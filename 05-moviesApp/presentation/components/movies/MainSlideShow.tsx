import { View, Text, useWindowDimensions } from "react-native";
import React, { useRef } from "react";
import { Movie } from "@/infrastructure/interfaces/movie.interface";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;
  return (
    <View className="h-[250px] w-full">
      <Carousel
        width={200}
        height={350}
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster poster={item.poster} id={item.id} />
        )}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};

export default MainSlideShow;
