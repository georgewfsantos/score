import { View, Text } from "react-native";
import { ScoreBoard } from "../../components/ScoreBoard";

import { styles } from "./styles";

export function Dashboard() {
  return (
    <View style={styles.container}>
      <ScoreBoard />
    </View>
  );
}
