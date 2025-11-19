import { View, Text, Modal, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import useCodes from "../hooks/useCodes";
import { useAuthStore } from "@/presentation/auth/store/useAuthStore";

interface Props {
  isVisible: boolean;
  setVisibility: (visible: boolean) => void;
}

const CodeModal = ({ isVisible, setVisibility }: Props) => {
  const { createCodeMutation } = useCodes();
  const { userId } = useAuthStore();

  const handleCreate = () => {
    setVisibility(false);
    if (userId) createCodeMutation.mutate({ usuario: userId });
  };
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      {createCodeMutation.isPending && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 items-center justify-center z-50">
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="bg-white rounded-2xl p-6 w-80">
          <Text className="text-lg font-semibold mb-2">{"Generar"}</Text>
          <Text className="text-gray-600 mb-6">
            {`¿Está seguro/a de que quiere generar un nuevo codigo?`}
          </Text>
          <View className="flex-row justify-around gap-4">
            <Pressable className="p-2 ">
              <Text className="text-gray-500 font-semibold">Cancelar</Text>
            </Pressable>
            <Pressable
              className={`py-2 px-4 bg-primary rounded-lg`}
              onPress={handleCreate}
              disabled={createCodeMutation.isPending}
            >
              <Text className={` text-white font-semibold `}>Generar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CodeModal;
