import React from 'react';
import { View, Button } from 'react-native';
import { List } from '@ant-design/react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <List>
        <List.Item
          onPress={() => navigation.navigate('Details')}
        >
          Go to Details
        </List.Item>
      </List>
    </View>
  );
};

export default HomeScreen;
