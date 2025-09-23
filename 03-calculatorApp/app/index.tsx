import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">50 X 50</ThemeText>
        <ThemeText variant="h2">250</ThemeText>
      </View>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          blackText
          onPress={() => console.log("C")}
        />
        <CalculatorButton
          label="+/-"
          blackText
          onPress={() => console.log("+/-")}
        />
        <CalculatorButton
          label="del"
          blackText
          onPress={() => console.log("del")}
        />
        <CalculatorButton
          color="orange"
          label="÷"
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => console.log("C")} />
        <CalculatorButton label="8" onPress={() => console.log("+/-")} />
        <CalculatorButton label="9" onPress={() => console.log("del")} />
        <CalculatorButton
          color="orange"
          label="x"
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => console.log("C")} />
        <CalculatorButton label="5" onPress={() => console.log("+/-")} />
        <CalculatorButton label="6" onPress={() => console.log("del")} />
        <CalculatorButton
          color="orange"
          label="-"
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => console.log("C")} />
        <CalculatorButton label="2" onPress={() => console.log("+/-")} />
        <CalculatorButton label="3" onPress={() => console.log("del")} />
        <CalculatorButton
          color="orange"
          label="+"
          onPress={() => console.log("÷")}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSized
          onPress={() => console.log("C")}
        />
        <CalculatorButton label="." onPress={() => console.log("+/-")} />
        <CalculatorButton
          color="orange"
          label="="
          onPress={() => console.log("÷")}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
