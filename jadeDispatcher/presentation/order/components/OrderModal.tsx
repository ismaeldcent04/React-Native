import { View, Text, Modal, Pressable } from "react-native";
import React from "react";
import { useOrders } from "../hooks/useOrders";
import { Order } from "@/infraestructure/interfaces/Order";

interface Props {
  order: Order;
  isVisible: boolean;
  setVisibility: (visible: boolean) => void;
  type: "delete" | "dispatch";
}

const OrderModal = ({ order, isVisible, setVisibility, type }: Props) => {
  const { upsertOrderMutation, softDeleteOrderMutation } = useOrders();

  const handleDispatch = () => {
    setVisibility(false);
    upsertOrderMutation.mutate({
      oid: order.id,
      clienternc: order.rnc,
      clienteCodigo: order.companyCode,
      clienteNombre: order.companyName,
      tipoNotificacion: order.orderInfo,
      estadoOrden: order.orderStatus,
      cuerpo: `Hola ${order.name} 👋🏼, tu pedido en Jade Teriyaki ya está *LISTO* para retirar. ¡Te esperamos!`,
      titulo: "Notificacion de estado de orden (Jade Teriyaki)",
      firma: order.name,
      puesto: "",
      fecha: new Date(),
      fechaRecibido: order.date,
      enviado: false,
      envioInmediato: true,
      sucursal: order.sucursal,
      contacto: order.contact,
    });
  };

  const handleDelete = () => {
    setVisibility(false);
    // Aquí podrías agregar tu lógica real para eliminar la orden
    softDeleteOrderMutation.mutate(order.id);
  };
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={() => setVisibility(false)}
    >
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
              onPress={type === "delete" ? handleDelete : handleDispatch}
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
