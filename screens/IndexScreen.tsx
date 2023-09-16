import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Box, VStack, Actionsheet} from 'native-base';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import ReferralScreen from '../components/ReferralContent';
import AgreementContent from '../components/AgreementContent';

type IndexScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Index'
>;

interface IndexScreenProps {
  navigation: IndexScreenNavigationProp;
}

const IndexScreen: React.FC<IndexScreenProps> = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReferralOpen, setIsReferralOpen] = useState(false);
  const toggleSheet = () => setIsOpen(!isOpen);

  const handleClick = () => {
    toggleReferralSheet();
  };

  const toggleReferralSheet = () => setIsReferralOpen(!isReferralOpen);

  return (
    <Box style={styles.container}>
      <VStack flex={1} space={5} justifyContent={'flex-end'} marginBottom={100}>
        <Button
          onPress={() => console.log('Login')}
          style={styles.loginBtn}
          _text={{color: '#fff', fontFamily: 'ClashGrotesk-Semibold'}}>
          Login
        </Button>
        <Button
          onPress={toggleSheet}
          style={styles.signup}
          _text={{
            color: '#0F0F10',
            fontFamily: 'ClashGrotesk-Semibold',
          }}>
          Create an account
        </Button>
      </VStack>

      <Actionsheet
        isOpen={isReferralOpen}
        onClose={toggleReferralSheet}
        hideDragIndicator={false}>
        <Actionsheet.Content background={'#121212'} px={5}>
          <ReferralScreen navigation={navigation} />
        </Actionsheet.Content>
      </Actionsheet>

      <Actionsheet isOpen={isOpen} onClose={toggleSheet} hideDragIndicator>
        <Actionsheet.Content background={'#121212'} px={5} pt={5}>
          <AgreementContent
            toggleSheet={toggleSheet}
            handleClick={handleClick}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },

  text: {
    fontFamily: 'Satoshi-Bold',
    color: '#fff',
    fontSize: 40,
  },

  loginBtn: {
    height: 45,
    width: 300,
    borderRadius: 100,
    borderColor: '#fff',
    backgroundColor: '#000',
    borderWidth: 1,
  },
  signup: {
    height: 45,
    width: 300,
    borderRadius: 100,
    backgroundColor: '#fff',
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default IndexScreen;
