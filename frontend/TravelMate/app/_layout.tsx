import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="traveloptions" />
      <Stack.Screen name="solotrip" />
      <Stack.Screen name="grouptrip" />
    </Stack>
  );
}
