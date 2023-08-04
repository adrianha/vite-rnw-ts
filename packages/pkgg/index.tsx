import { View } from "react-native";

export function Square({ color }: { color: string }) {
  return <View style={{ width: 100, height: 100, backgroundColor: color }} />;
}
