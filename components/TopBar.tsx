import {Flex, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';

interface TopBarProps {
  navigation: NavigationProp<any>;
}

const TopBar: React.FC<TopBarProps> = ({navigation}) => {
  return (
    <Flex h={10} justify="center">
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="chevron-back" size={24} color="#fff" />
      </Pressable>
    </Flex>
  );
};

export default TopBar;
