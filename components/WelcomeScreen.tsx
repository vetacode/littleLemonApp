import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <Text
          style={{
            paddingTop: 40,
            paddingBottom: 0,
            fontSize: 50,
            color: '#EDEFEE',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Welcome to Little Lemon
        </Text>
        <Text
          style={{
            padding: 40,
            fontSize: 38,
            textAlign: 'center',
            color: '#F4CE14',
            marginVertical: 8,
          }}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </ScrollView>
    </View>
  );
}
