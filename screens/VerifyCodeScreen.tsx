import {Box, VStack, Input, Text, Spinner, Flex} from 'native-base';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import TopBar from '../components/TopBar';
import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type VerifyCodeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VerifyCode'
>;

interface VerifyCodeScreenProps {
  navigation: VerifyCodeScreenNavigationProp;
}

export default function VerifyCodeScreen({navigation}: VerifyCodeScreenProps) {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const handleValidCode = () => {
    setTimeout(() => {
      navigation.navigate('Residence');
    }, 1000);
  };

  const handleVerifyCode = () => {
    if (code.length === 6) {
      setIsLoading(true);

      // Simulate OTP verification by setting loading to false after a delay
      setTimeout(() => {
        setIsLoading(false);
        if (code === '000000') {
          setIsValid(true);
          handleValidCode();
        }
      }, 1500);
    }
  };

  useEffect(() => {
    code.length === 6 && handleVerifyCode();
  }, [code]);

  return (
    <Box style={styles.container}>
      <TopBar navigation={navigation} />
      <VStack space={3}>
        <Text
          color="#fff"
          fontSize={25}
          my={2}
          fontFamily="ClashGrotesk-Semibold">
          We sent you a code
        </Text>
        <Text color="#A2A3A3" fontFamily="ClashGrotesk-Medium">
          Enter the code we sent to your number
        </Text>

        <Input
          w="90%"
          placeholder="000000"
          fontSize={16}
          fontFamily="ClashGrotesk-Medium"
          borderWidth={0}
          backgroundColor="#121212"
          color="#fff"
          keyboardType="numeric"
          value={code}
          onChangeText={value => {
            if (value.length <= 6) {
              setCode(value);
            }
          }}
        />

        <Text color="#A2A3A3" fontFamily="ClashGrotesk-Medium">
          Didn’t get that code? <Text color="#6771FF">Resend</Text>
        </Text>

        {code.length === 6 && (
          <Box
            minW={10}
            w={isLoading ? 10 : 200}
            h={10}
            backgroundColor={'#171819'}
            borderRadius={100}
            mt={2}
            align="center">
            {isLoading ? (
              <Spinner color="#fff" />
            ) : (
              <Flex direction="row" gap={2} align="center">
                {isValid ? (
                  <>
                    <Icon name="checkmark-circle" size={18} color="#fff" />
                    <Text color="#fff" fontFamily="ClashGrotesk-Medium">
                      Your number is verified
                    </Text>
                  </>
                ) : (
                  <>
                    <Icon name="warning" size={20} color="#FF0000" />
                    <Text color="#FF0000" fontFamily="ClashGrotesk-Medium">
                      The code is incorrect
                    </Text>
                  </>
                )}
              </Flex>
            )}
          </Box>
        )}
      </VStack>
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
