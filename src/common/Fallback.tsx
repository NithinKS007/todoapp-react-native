import React from 'react';
import { Text, View } from 'react-native';

const Fallback = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Something went wrong</Text>
  </View>
);

export default Fallback;
