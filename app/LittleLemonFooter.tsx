import { Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        marginBottom: 10,
        backgroundColor: '#F4CE14',
      }}
    >
      <Text style={{ fontSize: 18, color: 'black', textAlign: 'center',
      }}>All rights reserved by Little Lemon, 2025
      </Text>
    </View>
  );
}
