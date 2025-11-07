import { View, Text, Modal, Pressable, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useOrders } from "../hooks/useOrders";
import { Order } from "@/infraestructure/interfaces/Order";

interface Props {
  order: Order;
  isVisible: boolean;
  setVisibility: (visible: boolean) => void;
  type: "delete" | "dispatch";
}

const OrderModal = ({ order, isVisible, setVisibility, type }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { upsertOrderMutation, softDeleteOrderMutation, updateOrderMutation } =
    useOrders();

  const handleDispatch = () => {
    setVisibility(false);
    upsertOrderMutation.mutate({
      oid: order.id,
      clienternc: "130389586",
      tipoNotificacion: `Pedidos-${order.sucursal}-${order.orderNo}`,
      estadoOrden: order.orderStatus,
      cuerpo: `Hola ${order.name} 👋🏼, tu pedido en Jade Teriyaki ya está *LISTO* para retirar. ¡Te esperamos!`,
      titulo: "Notificacion de estado de orden (Jade Teriyaki)",
      firma: order.name,
      puesto: "Cliente",
      fecha: new Date(),
      fechaRecibido: order.date,
      enviado: false,
      envioInmediato: true,
      sucursal: order.sucursal,
      contacto: order.contact,
    });
  };

  const handleManualDispatch = () => {
    setVisibility(false);
    updateOrderMutation.mutate(order.id);
  };

  const handleDelete = () => {
    setVisibility(false);
    // Aquí podrías agregar tu lógica real para eliminar la orden
    softDeleteOrderMutation.mutate(order.id);
  };

  const handleClick = () => {
    if (type === "delete") {
      handleDelete();
    } else {
      order.orderStatus === 1 ? handleDispatch() : handleManualDispatch();
    }

    setIsClicked(true);
  };
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={() => setVisibility(false)}
    >
      {upsertOrderMutation.isPending && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 items-center justify-center z-50">
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="bg-white rounded-2xl p-6 w-80">
          <Text className="text-lg font-semibold mb-2">
            {type === "delete" ? "Eliminar Pedido" : "Despachar Pedido"}
          </Text>
          <Text className="text-gray-600 mb-6">
            {`¿Está seguro/a de que quiere ${type === "delete" ? "eliminar" : "despachar"} el pedido?`}
          </Text>
          <View className="flex-row justify-around gap-4">
            <Pressable className="p-2 " onPress={() => setVisibility(false)}>
              <Text className="text-gray-500 font-semibold">Cancelar</Text>
            </Pressable>
            <Pressable
              className={`py-2 px-4 ${type === "delete" ? "bg-[#D52041]" : "bg-green-700"} rounded-lg`}
              onPress={handleClick}
              disabled={isClicked}
            >
              <Text className={` text-white font-semibold `}>
                {type === "delete" ? "Eliminar" : "Confirmar"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OrderModal;
