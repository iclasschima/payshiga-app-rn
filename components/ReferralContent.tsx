import {
  Box,
  Text,
  Input,
  VStack,
  Button,
  HStack,
  Spinner,
  Flex,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ReferralScreenProps {
  navigation: NavigationProp<any>;
}

const ReferralScreen: React.FC<ReferralScreenProps> = ({navigation}) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [show, setShow] = useState(false);

  // const handleValidCode = () => {
  //   setTimeout(() => {
  //     navigation.navigate('PhoneNumber');
  //   }, 1000);
  // };

  const handleVerifyCode = () => {
    setIsLoading(true);
    setShow(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log(code);
      if (code === 'TBD99034') {
        setIsValid(true);
      }
    }, 1500);
  };

  const handleClick = () => navigation.navigate('PhoneNumber');

  return (
    <Box style={styles.container}>
      <Image
        source={require('../assets/images/referral-img.png')}
        style={styles.img}
      />
      <VStack space={3}>
        <Text
          color="#fff"
          fontFamily="ClashGrotesk-Semibold"
          fontSize={30}
          my={3}>
          Enter referrel code
        </Text>
        <Text color="#A2A3A3" fontSize={16} fontFamily="ClashGrotesk-Regular">
          “Skip” if you don’t have any code
        </Text>
        <Input
          placeholder="CODE"
          w="100%"
          borderWidth={0}
          placeholderTextColor={'#454647'}
          fontSize={16}
          backgroundColor={'#131415'}
          fontFamily="ClashGrotesk-Regular"
          autoFocus={true}
          color="#fff"
          value={code}
          onChangeText={value => {
            setCode(value);
            setShow(false);
            setIsValid(false);
          }}
          onSubmitEditing={handleVerifyCode}
        />

        {code.length && show ? (
          <Flex
            minW={10}
            w={isLoading ? 10 : 'fit-content'}
            h={10}
            backgroundColor={'#171819'}
            borderRadius={100}
            mt={2}
            justify="center"
            align="center">
            {isLoading ? (
              <Spinner color="#fff" />
            ) : (
              <Flex direction="row" gap={2} align="center">
                {isValid ? (
                  <>
                    <Icon name="checkmark-circle" size={18} color="#fff" />
                    <Text color="#fff" fontFamily="ClashGrotesk-Medium">
                      Great! Oluwatobi invited you
                    </Text>
                  </>
                ) : (
                  <>
                    <Icon name="warning" size={20} color="#FF0000" />
                    <Text color="#FF0000" fontFamily="ClashGrotesk-Medium">
                      Hm, I don't think that code is correct
                    </Text>
                  </>
                )}
              </Flex>
            )}
          </Flex>
        ) : null}
      </VStack>

      <HStack mt={50} space={3} marginBottom={40} alignItems={'flex-end'}>
        <Button
          onPress={handleClick}
          style={styles.skipBtn}
          _text={{color: '#fff', fontFamily: 'ClashGrotesk-Semibold'}}>
          Skip
        </Button>
        <Button
          onPress={handleClick}
          isDisabled={!isValid}
          style={styles.continueBtn}
          _disabled={{backgroundColor: '#353973'}}
          _text={{
            color: '#fff',
            fontFamily: 'ClashGrotesk-Semibold',
          }}>
          Continue
        </Button>
      </HStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 10,
    height: 900,
    flexDirection: 'column',
  },
  img: {width: 70, height: 45},
  skipBtn: {
    width: '50%',
    height: 45,
    backgroundColor: '#1F2021',
    borderRadius: 100,
  },
  continueBtn: {
    width: '50%',
    height: 45,
    backgroundColor: '#6771FF',
    borderRadius: 100,
  },
});

export default ReferralScreen;
