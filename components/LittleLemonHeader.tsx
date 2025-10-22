import * as React from 'react';
import { Text, View } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View
      style={{
        flex: 0.2,
        backgroundColor: '#F4CE14',
        alignItems: 'center',
      }}
    >
      <Text
        style={{ padding: 20, fontSize: 30, fontWeight: '600', color: 'black' }}
      >
        Hello
        <Text style={{ fontWeight: 'bold', color: '#495E57' }}>
          {' '}
          Lovely Customers !!
        </Text>
      </Text>
    </View>
  );
}
