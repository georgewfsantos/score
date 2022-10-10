import { View, Text } from "react-native";

import { styles } from "./styles";

export function ScoreBoard() {
  return (
    <View style={styles.container}>
      <View style={styles.playerOne}>
        <View style={styles.playerName}>
          <View style={styles.playerNameWrapper}>
            <Text style={styles.name}>Dominic Thiem</Text>
          </View>
        </View>
        <View style={styles.playerScore}>
          <Text style={styles.score}>0</Text>
        </View>
      </View>
      <View style={styles.playerTwo}>
        <View style={styles.playerName}>
          <View style={styles.playerNameWrapper}>
            <Text style={styles.name}> Vasek Pospisil</Text>
          </View>
        </View>
        <View style={styles.playerScore}>
          <Text style={styles.score}>0</Text>
        </View>
      </View>
    </View>
  );
}
