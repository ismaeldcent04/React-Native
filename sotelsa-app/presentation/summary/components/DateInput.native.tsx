import { View, Text, Pressable, TextInput, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
}

const DateInput = ({ label, value, onChange }: Props) => {
  const [showPicker, setShowPicker] = useState(false);

  const formatDate = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const handleChange = (_: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) onChange(selectedDate);
  };

  return (
    <View className="flex-1">
      <Text className="text-xs text-gray-500 mb-1">{label}</Text>

      {/* WEB */}
      {Platform.OS === "web" ? (
        <TextInput
          {...({ type: "date" } as any)}
          value={formatDate(value)}
          onChange={(e: any) => onChange(new Date(e.target.value))}
          className="border border-gray-200 rounded-xl px-3 py-2 bg-white"
        />
      ) : (
        <>
          <Pressable
            onPress={() => setShowPicker(true)}
            className="border border-gray-200 rounded-xl px-3 py-3 bg-white flex-row justify-between items-center"
          >
            <Text>{formatDate(value)}</Text>

            <Ionicons name="calendar-outline" size={18} color="gray" />
          </Pressable>

          {showPicker && (
            <DateTimePicker
              value={value}
              mode="date"
              display="default"
              onChange={handleChange}
            />
          )}
        </>
      )}
    </View>
  );
};

export default DateInput;
