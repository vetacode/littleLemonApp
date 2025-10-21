import * as React from 'react';
import { Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View
      style={{
        flex: 0.2,
        backgroundColor: '#F4CE14',
      }}
    >
      <Text style={{padding: 60, fontSize: 30, fontWeight: '600', color: 'black'
      }}>Welcome to Little Lemon</Text>
    </View>
  );
}
