import { FlatList } from "react-native";
import React from "react";

import { Payment } from "@/core/payment/interfaces/payment.interface";
import PaymentItem from "./PaymentItem";

interface Props {
  payments: Payment[];
  loadNextPage: () => void;
}

const PaymentList = ({ payments, loadNextPage }: Props) => {
  return (
    <FlatList
      data={payments}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <PaymentItem payment={item} />}
      onEndReached={loadNextPage}
      onEndReachedThreshold={0.8}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default PaymentList;
