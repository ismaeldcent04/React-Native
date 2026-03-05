import React, { useState } from "react";
import { Modal, View, Text, Button, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Props {
  visible: boolean;
  startDate: Date;
  endDate: Date;
  onClose: () => void;
  onApply: (start: Date, end: Date) => void;
}

export const DateRangePickerModal = ({
  visible,
  startDate,
  endDate,
  onClose,
  onApply,
}: Props) => {
  const [tempStart, setTempStart] = useState(startDate);
  const [tempEnd, setTempEnd] = useState(endDate);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Select Date Range</Text>

          <Text>Start Date</Text>
          <DateTimePicker
            value={tempStart}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={(_, date) => {
              if (date) setTempStart(date);
            }}
          />

          <Text>End Date</Text>
          <DateTimePicker
            value={tempEnd}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={(_, date) => {
              if (date) setTempEnd(date);
            }}
          />

          <View style={styles.buttons}>
            <Button title="Cancel" onPress={onClose} />

            <Button
              title="Apply"
              onPress={() => {
                onApply(tempStart, tempEnd);
                onClose();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  container: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
