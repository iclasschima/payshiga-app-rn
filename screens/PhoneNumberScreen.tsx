import {
  Box,
  Text,
  VStack,
  InputGroup,
  Input,
  Actionsheet,
  InputLeftAddon,
  Flex,
  Pressable,
  ScrollView,
  Image,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import axios, {AxiosResponse} from 'axios';
import CustomNumberKeyboard from '../components/CustomNumberKeyboard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import TopBar from '../components/TopBar';
import Icon from 'react-native-vector-icons/Ionicons';

interface Country {
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes: string;
  };
  flags: {
    png: string;
  };
}

type PhoneNumberScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PhoneNumber'
>;

interface PhoneNumberScreenProps {
  navigation: PhoneNumberScreenNavigationProp;
}

export default function PhoneNumber({navigation}: PhoneNumberScreenProps) {
  const [countryCode, setCountryCode] = useState<string>('+234');
  const [loading, setLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSheet = () => setIsOpen(!isOpen);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterKey, setFilterKey] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>('');

  const filteredCountries = countries.filter(country =>
    country?.name?.common.toLowerCase().includes(filterKey.toLowerCase()),
  );

  const handleCountrySelect = (country: Country) => {
    setCountryCode(`${country.idd.root}${country.idd.suffixes}`);
    toggleSheet();
    setFilterKey('');
  };

  const fetchCountries = async () => {
    const apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags,idd';

    try {
      const response: AxiosResponse = await axios.get(apiUrl);
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (value: string) => {
    if (value === 'del') {
      setPhone(phone.slice(0, -1));
      return;
    }
    setPhone(phone + value);
  };

  const handleSubmit = () => {
    navigation.navigate('VerifyCode');
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setIsDisabled(phone.length < 5);
  }, [phone]);

  return (
    <Box style={styles.container}>
      <TopBar navigation={navigation} />
      <VStack space={3}>
        <Text
          color="#fff"
          fontSize={25}
          my={2}
          fontFamily="ClashGrotesk-Semibold">
          Test Assessment
        </Text>
        <Text color="#A2A3A3" fontFamily="ClashGrotesk-Medium">
          We will send you a verification code to confirm this is your number
        </Text>

        <InputGroup w="90%" mx="auto" justifyContent="center" mt={3}>
          <InputLeftAddon
            w="20%"
            backgroundColor="#121212"
            borderWidth={0}
            justifyContent={'center'}>
            <Pressable
              onPress={toggleSheet}
              w="full"
              flexDirection="row"
              alignItems="center"
              gap={1}>
              <Text color="#fff" fontFamily="ClashGrotesk-Medium">
                {countryCode}
              </Text>
              <Icon name="caret-down-outline" size={16} color="#fff" />
            </Pressable>
          </InputLeftAddon>
          <Input
            w="90%"
            placeholder="9031861100"
            fontSize={16}
            fontFamily="ClashGrotesk-Medium"
            borderWidth={0}
            backgroundColor="#121212"
            value={phone}
            color="#fff"
            editable={false}
          />
        </InputGroup>
      </VStack>

      <CustomNumberKeyboard
        isDisabled={isDisabled}
        onKeyPress={handleClick}
        onSubmit={handleSubmit}
      />

      <Actionsheet isOpen={isOpen} onClose={toggleSheet}>
        <Actionsheet.Content background={'#131415'} px={5} h="700">
          <Flex w="100%" h="100%" gap={3}>
            <Flex flexDir="row" justify="space-between" align="center" mb={2}>
              <Text
                fontSize="20"
                color="#fff"
                fontWeight={600}
                fontFamily="ClashGrotesk-Semibold">
                Select Country
              </Text>

              <Pressable onPress={toggleSheet}>
                <Flex
                  w={8}
                  h={8}
                  bg="#1C1E1B"
                  borderRadius={100}
                  align={'center'}
                  justify="center">
                  <Icon name="close" color="#6F6F6F" size={18} />
                </Flex>
              </Pressable>
            </Flex>

            <Input
              borderWidth={0}
              placeholder="Search country"
              fontSize={16}
              fontFamily="ClashGrotesk-Medium"
              value={filterKey}
              onChangeText={value => setFilterKey(value)}
              color="#fff"
              bg="#4b4b4c"
              borderRadius={25}
              InputLeftElement={
                <Box ml={3}>
                  <Icon name="search" size={16} color="#fff" />
                </Box>
              }
            />

            <ScrollView h="600">
              {filteredCountries?.map((country: Country) => (
                <Pressable
                  onPress={() => handleCountrySelect(country)}
                  key={country?.name?.common}>
                  <Flex
                    flexDirection="row"
                    alignItems={'center'}
                    gap={4}
                    mb={5}>
                    <Image
                      source={{uri: country.flags.png}}
                      alt="country-flag"
                      style={{width: 50, height: 50, borderRadius: 100}}
                    />
                    <Text
                      fontSize={16}
                      fontWeight={600}
                      color="#fff"
                      fontFamily="ClashGrotesk-Medium">
                      {country?.name?.common}
                    </Text>
                    <Text color="#A2A3A3" fontFamily="ClashGrotesk-Regular">
                      {country.idd.root}
                      {country.idd.suffixes}
                    </Text>
                  </Flex>
                </Pressable>
              ))}
            </ScrollView>
          </Flex>
        </Actionsheet.Content>
      </Actionsheet>
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
