import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect } from "expo-router";

export default function index() {
  return <Redirect href={"./tabs"} />;
  //   return (
  //     <SafeAreaView>
  //       <View className="mt-6 mx-2.5">
  //         <Text className="text-3xl font-work-black text-primary ">
  //           Hola mundo
  //         </Text>
  //         <Text className="text-3xl font-work-medium text-secondary-100 ">
  //           Hola mundo
  //         </Text>
  //         <Text className="text-3xl font-work-light text-tertiary ">
  //           Hola mundo
  //         </Text>

  //         <Link href={"/products"}>Productos</Link>
  //       </View>
  //     </SafeAreaView>
  //   );
}
