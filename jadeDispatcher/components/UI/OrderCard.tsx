import { View, Text, Image, Pressable, Alert } from "react-native";
import React from "react";

const OrderCard = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Despachar Pedido",
      "Esta seguro/a de que quiere despachar el pedido?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]
    );
  return (
    <View className="h-48 bg-white  my-4 rounded-xl shadow p-4 gap-4 ">
      <View className="flex-row gap-4 my-2 items-center">
        <Image
          className="h-14 w-14 shadow rounded-lg "
          source={{
            uri: "https://pedidosya.dhmedia.io/image/pedidosya/restaurants/logo-jade-teriyaki.png",
          }}
        />

        <View className="flex gap-1">
          <View className="flex-row items-center gap-2">
            <Text className="text-[#EEA736] text-[10px] ">Pedido</Text>
            <Text className="text-[#838383] text-[10px]">Hoy - 01:24 pm</Text>
          </View>

          <Text className="font-bold">Ismael David Dicent Lahoz</Text>
          <Text className="text-[#5B5B5B] text-sm font-light">
            (809)-875-4411
          </Text>
        </View>
        <Text className="font-bold">#13490</Text>
      </View>
      <Pressable
        onPress={createTwoButtonAlert}
        className="h-12 items-center justify-center bg-[#D52041] rounded-xl "
      >
        <Text className="text-white">Despachar</Text>
      </Pressable>
    </View>
  );
};

export default OrderCard;
