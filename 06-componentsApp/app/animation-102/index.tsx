import { useRef } from "react";
import { View, Text, PanResponder, Animated } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      }
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false } // Back to zero
      ).start();
    },
  });
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout()]}
          className="bg-[#61dafb] w-20 h-20 rounded"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Animation102Screen;
