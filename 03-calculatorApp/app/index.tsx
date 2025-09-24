import { View } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { useCalculator } from "@/hooks/useCalculator";

const CalculatorApp = () => {
  const {
    formula,
    number,
    prevNumber,
    buildNumber,
    toggleSign,
    clean,
    deleteLast,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateSubResult,
    calculateResult,
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{prevNumber}</ThemeText>
        )}
      </View>
      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton label="C" blackText onPress={clean} />
        <CalculatorButton label="+/-" blackText onPress={toggleSign} />
        <CalculatorButton label="del" blackText onPress={deleteLast} />
        <CalculatorButton color="orange" label="÷" onPress={divideOperation} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={() => buildNumber("7")} />
        <CalculatorButton label="8" onPress={() => buildNumber("8")} />
        <CalculatorButton label="9" onPress={() => buildNumber("9")} />
        <CalculatorButton
          color="orange"
          label="x"
          onPress={multiplyOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={() => buildNumber("4")} />
        <CalculatorButton label="5" onPress={() => buildNumber("5")} />
        <CalculatorButton label="6" onPress={() => buildNumber("6")} />
        <CalculatorButton
          color="orange"
          label="-"
          onPress={subtractOperation}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={() => buildNumber("1")} />
        <CalculatorButton label="2" onPress={() => buildNumber("2")} />
        <CalculatorButton label="3" onPress={() => buildNumber("3")} />
        <CalculatorButton color="orange" label="+" onPress={addOperation} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          doubleSized
          onPress={() => buildNumber("0")}
        />
        <CalculatorButton label="." onPress={() => buildNumber(".")} />
        <CalculatorButton color="orange" label="=" onPress={calculateResult} />
      </View>
    </View>
  );
};

export default CalculatorApp;
