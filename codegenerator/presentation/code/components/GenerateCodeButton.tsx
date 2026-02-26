import { View, Text, Pressable } from "react-native";
import React from "react";
import useCodes from "../hooks/useCodes";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";

interface Props {
  showModal: () => void;
}

const GenerateCodeButton = ({ showModal }: Props) => {
  return (
    <Pressable
      onPress={showModal}
      className=" mx-auto h-16  w-[85%] min-w-[84px] max-w-[480px]  items-center justify-center rounded-lg  bg-primary shadow-lg shadow-primary/30"
    >
      <Text className="text-white text-base font-bold">
        Generar Nuevo Código
      </Text>
    </Pressable>
  );
};

export default GenerateCodeButton;
