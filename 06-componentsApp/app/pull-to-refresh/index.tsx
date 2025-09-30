import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useCallback, useState } from "react";
import { ScrollView, RefreshControl } from "react-native";

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    // Simula una petición de red o proceso async
    setTimeout(() => {
      setIsRefreshing(false);
    }, 5000);
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
    >
      <ThemedView margin>
        <ThemedText>PullToRefresh</ThemedText>
        {[...Array(30)].map((_, i) => (
          <ThemedText key={i}>Item {i + 1}</ThemedText>
        ))}
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
