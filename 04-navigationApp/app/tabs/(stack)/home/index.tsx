import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import CustomButton from "@/components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        <CustomButton
          variant="text-only"
          color="primary"
          onPress={() => router.push("./products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          variant="text-only"
          color="secondary"
          onPress={() => router.push("./profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          variant="text-only"
          color="tertiary"
          onPress={() => router.push("./settings")}
        >
          Ajustes
        </CustomButton>

        {/* <Link href={"/products"} asChild>
          <CustomButton
            variant="contained"
            color="primary"
            onPress={() => router.push("/products")}
          >
            Productos
          </CustomButton>
        </Link> */}
        {/* <Link className="mb-5 " href={"/products"}>
          Productos
        </Link>
        <Link className="mb-5 " href={"/profile"}>
          Perfil
        </Link>
        <Link className="mb-5 " href={"/settings"}>
          Ajustes
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
