import { Text, View } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        // marginBottom: 10,
        backgroundColor: '#F4CE14',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
          fontStyle: 'italic',
        }}
      >
        All rights reserved by Little Lemon {new Date().getFullYear()}
      </Text>
    </View>
  );
}
