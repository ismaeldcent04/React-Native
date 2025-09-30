import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, Switch } from "react-native";

const Switches = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ThemedView margin className="mt-2">
      <ThemedCard>
        {/* <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}

        <ThemedSwitch
          text="Activo"
          onValueChanged={toggleSwitch}
          className="mb-2"
          value={isEnabled}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
