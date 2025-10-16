import { Slot, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../global.css";
const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
export default function RootLayout() {
  return (
    <QueryClientProvider client={client}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
    </QueryClientProvider>
  );
}
