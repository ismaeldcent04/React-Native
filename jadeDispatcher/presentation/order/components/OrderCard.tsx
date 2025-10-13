import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  useWindowDimensions,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import { Order } from "@/infraestructure/interfaces/Order";
import { Formatter } from "@/helpers/formatters/formatter";
import { useOrders } from "@/presentation/order/hooks/useOrders";

interface Props {
  order: Order;
}

const OrderCard = ({ order }: Props) => {
  const { width } = useWindowDimensions();
  const { orderMutation } = useOrders();
  const orderNo =
    order.orderInfo !== null ? order.orderInfo.split("-")[2] : order.id;

  const color = order.orderStatus === 1 ? "#EEA736" : "#1A7815";

  const scaleAnim = useRef(new Animated.Value(1)).current;

  const animatePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const animatePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  const dispatchOrder = () =>
    Alert.alert(
      "Despachar Pedido",
      "Esta seguro/a de que quiere despachar el pedido?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            orderMutation.mutate({
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
            }),
        },
      ]
    );

  const deleteOrder = () => {
    Alert.alert(
      "Eliminar pedido",
      "Esta seguro/a de que quiere eliminar el pedido?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {},
        },
      ]
    );
  };
  return (
    <Pressable
      onLongPress={deleteOrder}
      onPressIn={animatePressIn}
      onPressOut={animatePressOut}
    >
      <Animated.View
        className="h-48  bg-white  my-4 rounded-xl shadow p-4 gap-4  "
        style={{
          width: width * 0.9,
          marginHorizontal: "auto",
          transform: [{ scale: scaleAnim }],
        }}
      >
        <View className="flex-row  my-2 items-center justify-between">
          <Image
            className="h-14 w-14 shadow rounded-lg "
            source={{
              uri: "https://pedidosya.dhmedia.io/image/pedidosya/restaurants/logo-jade-teriyaki.png",
            }}
          />

          <View className="flex gap-1">
            <View className="flex-row items-center gap-2">
              <Text className=" text-[10px] " style={{ color: color }}>
                {order.orderStatus === 1 ? "Pedido" : "Despachado"}
              </Text>
              <Text className="text-[#838383] text-[10px]">
                {`${Formatter.getRelativeDayLabel(order.date.toString())} - ${Formatter.date(order.date)}`}
              </Text>
            </View>

            <Text className="font-bold">{order.name}</Text>
            <Text className="text-[#5B5B5B] text-sm font-light">
              {order.contact}
            </Text>
          </View>
          <Text className="font-bold">#{orderNo}</Text>
        </View>
        <Pressable
          onPress={dispatchOrder}
          className={`h-12 items-center justify-center ${order.orderStatus === 0 || order.orderStatus === 2 ? "bg-gray-400" : "bg-[#D52041]"} bg-[#D52041] rounded-xl`}
          disabled={order.orderStatus === 0 || order.orderStatus === 2}
        >
          <Text className="text-white">Despachar</Text>
        </Pressable>
      </Animated.View>
    </Pressable>
  );
};

export default OrderCard;
