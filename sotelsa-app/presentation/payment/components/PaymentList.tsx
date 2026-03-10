import { FlatList, Text } from "react-native";
import React from "react";

import { Payment } from "@/core/payment/interfaces/payment.interface";
import PaymentItem from "./PaymentItem";
import Animated, { FadeInUp } from "react-native-reanimated";

interface Props {
  payments: Payment[];
  loadNextPage: () => void;
}

const PaymentList = ({ payments, loadNextPage }: Props) => {
  if (payments.length == 0)
    return (
      <Text className="text-xs px-2 font-bold text-gray-400 uppercase lg:text-lg ">
        No data.
      </Text>
    );
  return (
    <FlatList
      data={payments}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Animated.View entering={FadeInUp.duration(400).delay(50 * index)}>
          <PaymentItem payment={item} />
        </Animated.View>
      )}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PaymentList;
