import { Slot, Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../global.css";

export default function RootLayout() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
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
