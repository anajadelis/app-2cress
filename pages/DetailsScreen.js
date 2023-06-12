import React from 'react';
import { View, Text } from 'react-native';
import { List } from '@ant-design/react-native';

const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <List>
        <List.Item>
          <Text>Details Screen</Text>
        </List.Item>
      </List>
    </View>
  );
};

export default DetailsScreen;
