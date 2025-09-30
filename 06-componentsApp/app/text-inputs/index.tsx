import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const isIOS = Platform.OS === "ios";

  return (
    <KeyboardAvoidingView behavior={isIOS ? "height" : undefined}>
      <ScrollView>
        <ThemedView>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
            <ThemedTextInput
              placeholder="Correo electronico"
              autoCapitalize="words"
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
            <ThemedTextInput
              placeholder="Telefono"
              textContentType="telephoneNumber"
              autoCapitalize="words"
              keyboardType="phone-pad"
              autoCorrect={false}
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>

        <ThemedCard>
          <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
        </ThemedCard>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
