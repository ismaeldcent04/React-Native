import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  useWindowDimensions,
  Animated,
  Modal,
} from "react-native";
import React, { useRef, useState } from "react";
import { Order } from "@/infraestructure/interfaces/Order";
import { Formatter } from "@/helpers/formatters/formatter";
import { useOrders } from "@/presentation/order/hooks/useOrders";
import OrderModal from "./OrderModal";

interface Props {
  order: Order;
}

const OrderCard = ({ order }: Props) => {
  const { width } = useWindowDimensions();

  const isDesktop = width >= 1024;

  const [showDispatchModal, setShowDispatchModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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
    <>
      <OrderModal
        setVisibility={(value) => setShowDispatchModal(value)}
        isVisible={showDispatchModal}
        order={order}
        type="dispatch"
      />
      <OrderModal
        setVisibility={(value) => setShowDeleteModal(value)}
        isVisible={showDeleteModal}
        order={order}
        type="delete"
      />
      <Pressable
        onLongPress={() => setShowDeleteModal(true)}
        onPressIn={animatePressIn}
        onPressOut={animatePressOut}
      >
        {isDesktop ? (
          <Animated.View
            style={{
              width: isDesktop ? width * 0.9 : width * 0.9,
              marginHorizontal: "auto",
              transform: [{ scale: scaleAnim }],
              backgroundColor: "white",
              borderRadius: 12,
              marginVertical: 16,
              padding: 16,
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Contenedor principal de la información */}
            <View
              style={{
                flex: 1,
                flexDirection: isDesktop ? "row" : "column",
                alignItems: isDesktop ? "center" : undefined,
                justifyContent: "center",
                gap: 16,
              }}
            >
              {/* Imagen */}
              <Image
                className="h-14 w-14 shadow rounded-lg"
                source={{
                  uri: "https://pedidosya.dhmedia.io/image/pedidosya/restaurants/logo-jade-teriyaki.png",
                }}
              />

              {/* Columnas de información */}
              <View
                style={{
                  flex: 1,
                  flexDirection: isDesktop ? "row" : "column",
                }}
              >
                {/* Estado y fecha */}
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    gap: 8,
                  }}
                >
                  <Text style={{ color: color, fontSize: isDesktop ? 14 : 10 }}>
                    {order.orderStatus === 1 ? "Pedido" : "Despachado"}
                  </Text>
                  <Text
                    style={{
                      color: "#838383",
                      fontSize: isDesktop ? 14 : 10,
                    }}
                  >
                    {`${Formatter.getRelativeDayLabel(order.date.toString())} - ${Formatter.date(order.date)}`}
                  </Text>
                </View>

                {/* Nombre del cliente */}
                <View style={{ flex: 1 }} className="items-center">
                  <Text className="font-bold">{order.name}</Text>
                </View>

                {/* Contacto */}
                <View style={{ flex: 1 }}>
                  <Text className="text-[#5B5B5B] text-sm font-light">
                    {order.contact}
                  </Text>
                </View>

                {/* Número de pedido */}
                <View
                  style={{
                    flex: 1,
                    alignItems: isDesktop ? "flex-start" : undefined,
                  }}
                >
                  <Text className="font-bold">#{orderNo}</Text>
                </View>
              </View>
            </View>

            {/* Botón de despachar */}
            <Pressable
              onPress={() => setShowDispatchModal(true)}
              className={`h-12 items-center justify-center rounded-xl ${
                order.orderStatus === 0 || order.orderStatus === 2
                  ? "bg-gray-400"
                  : "bg-[#D52041]"
              }`}
              style={{ width: isDesktop ? "40%" : "100%" }}
              disabled={order.orderStatus === 0 || order.orderStatus === 2}
            >
              <Text className="text-white">Despachar</Text>
            </Pressable>
          </Animated.View>
        ) : (
          <Animated.View
            className="h-48  bg-white  my-4 rounded-xl shadow p-4 gap-4 lg:flex-row "
            style={{
              width: isDesktop ? width * 0.9 : width * 0.9,
              marginHorizontal: "auto",
              transform: [{ scale: scaleAnim }],
              backgroundColor: "white",
              borderRadius: 12,
              marginVertical: 16,
              padding: 16,
              flexDirection: isDesktop ? "row" : "column",
              gap: isDesktop ? 80 : undefined,
              alignItems: isDesktop ? "center" : undefined,
            }}
          >
            <View className="flex-row  my-2 items-center justify-between lg:justify-between lg:gap-4">
              <Image
                className="h-14 w-14 shadow rounded-lg "
                source={{
                  uri: "https://pedidosya.dhmedia.io/image/pedidosya/restaurants/logo-jade-teriyaki.png",
                }}
              />

              <View className="flex gap-1 lg:flex-row lg:gap-20">
                <View className="flex-row items-center gap-2">
                  <Text
                    className=" text-[10px] lg:text-sm"
                    style={{ color: color }}
                  >
                    {order.orderStatus === 1 ? "Pedido" : "Despachado"}
                  </Text>
                  <Text className="text-[#838383] text-[10px] lg:text-sm">
                    {`${Formatter.getRelativeDayLabel(order.date.toString())} - ${Formatter.date(order.date)}`}
                  </Text>
                </View>

                <Text className="font-bold">{order.name}</Text>
                <Text className="text-[#5B5B5B] text-sm font-light">
                  {order.contact}
                </Text>
              </View>
              <Text className="font-bold lg:mx-6">#{orderNo}</Text>
            </View>
            <Pressable
              onPress={() => setShowDispatchModal(true)}
              className={`h-12 items-center justify-center ${order.orderStatus === 0 || order.orderStatus === 2 ? "bg-gray-400" : "bg-[#D52041]"} bg-[#D52041] rounded-xl lg:w-[40%]`}
              disabled={order.orderStatus === 0 || order.orderStatus === 2}
            >
              <Text className="text-white">Despachar</Text>
            </Pressable>
          </Animated.View>
        )}
      </Pressable>
    </>
  );
};

export default OrderCard;
