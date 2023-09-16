import {
  Text,
  Box,
  VStack,
  InputGroup,
  Input,
  InputLeftAddon,
  Spinner,
  Flex,
} from 'native-base';
import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';

type IDScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ID'
>;

interface IDScreenProps {
  navigation: IDScreenNavigationProp;
}

export default function IDScreen({navigation}: IDScreenProps) {
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [show, setShow] = useState(false);

  const handlePress = () => {
    navigation.navigate('DisplayImage');
  };

  const handleVerifyId = () => {
    setIsLoading(true);
    setShow(true);

    setTimeout(() => {
      setIsLoading(false);
      if (id === 'hushpuppi') {
        setIsValid(true);
      }
    }, 1500);
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
          Choose a Shiga ID
        </Text>
        <Text color="#A2A3A3" fontFamily="ClashGrotesk-Medium">
          Your unique name for getting paid by anyone
        </Text>

        <InputGroup w="90%" mx="auto" justifyContent="center" mt={3}>
          <InputLeftAddon
            backgroundColor="#121212"
            borderWidth={0}
            justifyContent={'center'}>
            <Text color="#454647" fontFamily="ClashGrotesk-Medium">
              @
            </Text>
          </InputLeftAddon>
          <Input
            w="90%"
            placeholder="uniqueYou"
            fontSize={16}
            fontFamily="ClashGrotesk-Medium"
            borderWidth={0}
            backgroundColor="#121212"
            value={id}
            color="#fff"
            onChangeText={value => {
              setId(value);
              setShow(false);
              setIsValid(false);
            }}
            returnKeyType="done"
            onSubmitEditing={handleVerifyId}
          />
        </InputGroup>

        {id.length && show ? (
          <Box
            minW={10}
            w={isLoading ? 10 : 200}
            h={10}
            backgroundColor={'#171819'}
            borderRadius={100}
            mt={2}
            alignItems="center"
            justifyContent={'center'}>
            {isLoading ? (
              <Spinner color="#fff" />
            ) : (
              <Flex direction="row" gap={2} align="center">
                {isValid ? (
                  <>
                    <Icon name="checkmark-circle" size={18} color="#fff" />
                    <Text color="#fff" fontFamily="ClashGrotesk-Medium">
                      This ID is available
                    </Text>
                  </>
                ) : (
                  <>
                    <Icon name="warning" size={20} color="#FF0000" />
                    <Text color="#FF0000" fontFamily="ClashGrotesk-Medium">
                      Oops! someone beat you to it
                    </Text>
                  </>
                )}
              </Flex>
            )}
          </Box>
        ) : null}
      </VStack>

      <Box flex={1} justifyContent="flex-end">
        <CustomButton isDisabled={!isValid} onPress={handlePress}>
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
});
