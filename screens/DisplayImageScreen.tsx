import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Box, VStack, Stack, Row, Text, Flex, Pressable} from 'native-base';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import TopBar from '../components/TopBar';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomButton from '../components/CustomButton';

type DisplayImageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'DisplayImage'
>;

interface DisplayImageScreenProps {
  navigation: DisplayImageScreenNavigationProp;
}

export default function DisplayImageScreen({
  navigation,
}: DisplayImageScreenProps) {
  const [color, setColor] = useState('');

  const handlePress = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <Box style={styles.container}>
      <TopBar navigation={navigation} />
      <VStack space={3}>
        <Text
          color="#fff"
          fontSize={25}
          my={2}
          fontFamily="ClashGrotesk-Semibold">
          Set a Display Image
        </Text>
        <Text color="#A2A3A3" fontFamily="ClashGrotesk-Medium">
          Choose a image for your wallet profile. You can always change this
          later
        </Text>

        <Flex justify="center" align="center" h={340} position="relative">
          <Box>
            <Box
              bg={color ? color : 'transparent'}
              borderRadius="full"
              borderWidth={color ? 0 : 9}
              borderColor="#2E2F31"
              width={200}
              height={200}
              alignItems="center"
              justifyContent="center"
              borderStyle={'dashed'}>
              {color ? (
                <Text
                  fontSize={70}
                  color="#fff"
                  fontFamily="ClashGrotesk-Medium">
                  C
                </Text>
              ) : (
                <Icon name="plus" size={50} color="#2E2F31" />
              )}
            </Box>

            <Box style={styles.icon}>
              <Icon name="image" size={20} color="#fff" />
            </Box>
          </Box>
        </Flex>
      </VStack>

      <Box flex={1} justifyContent={'flex-end'} alignItems="center">
        <Text color="#fff" fontFamily="ClashGrotesk-Medium">
          or customize
        </Text>

        <Stack style={styles.container} space={10} mt={5}>
          <Row w="full" justifyContent={'space-around'} space={2}>
            <Pressable
              h={60}
              w={60}
              backgroundColor="#4B92F7"
              borderRadius={100}
              onPress={() => setColor('#4B92F7')}
            />

            <Pressable
              h={60}
              w={60}
              backgroundColor="#75E6C0"
              borderRadius={100}
              onPress={() => setColor('#75E6C0')}
            />

            <Pressable
              h={60}
              w={60}
              backgroundColor="#EB5149"
              borderRadius={100}
              onPress={() => setColor('#EB5149')}
            />

            <Pressable
              h={60}
              w={60}
              backgroundColor="#59C1E9"
              borderRadius={100}
              onPress={() => setColor('#59C1E9')}
            />
          </Row>

          <Row w="full" justifyContent={'space-around'} space={2}>
            <Pressable
              h={60}
              w={60}
              backgroundColor="#E862BC"
              borderRadius={100}
              onPress={() => setColor('#E862BC')}
            />

            <Pressable
              h={60}
              w={60}
              backgroundColor="#F4D957"
              borderRadius={100}
              onPress={() => setColor('#F4D957')}
            />

            <Pressable
              h={60}
              w={60}
              backgroundColor="#E26F3F"
              borderRadius={100}
              onPress={() => setColor('#E26F3F')}
            />

            <Pressable
              h={60}
              w={60}
              backgroundColor="#9F40F5"
              borderRadius={100}
              onPress={() => setColor('#9F40F5')}
            />
          </Row>
        </Stack>

        <CustomButton isDisabled={!color} onPress={handlePress}>
          Continue
        </CustomButton>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    paddingBottom: 0,
  },
  icon: {
    position: 'absolute',
    bottom: 12,
    right: 5,
    backgroundColor: '#454647',
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
