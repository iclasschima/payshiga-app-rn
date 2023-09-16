import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStackParamList';
import {
  Box,
  VStack,
  Text,
  ScrollView,
  Pressable,
  Flex,
  Image,
  Spinner,
} from 'native-base';
import TopBar from '../components/TopBar';
import axios, {AxiosResponse} from 'axios';

type ResidenceScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'VerifyCode'
>;

interface ResidenceScreenProps {
  navigation: ResidenceScreenNavigationProp;
}

interface Country {
  name: {
    common: string;
  };

  flags: {
    png: string;
  };
}

export default function ResidenceScreen({navigation}: ResidenceScreenProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCountries = async () => {
    const apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags';

    try {
      const response: AxiosResponse = await axios.get(apiUrl);
      setCountries(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCountrySelect = () => {
    navigation.navigate('ID');
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Box style={styles.container}>
      <TopBar navigation={navigation} />
      <VStack space={3}>
        <Text
          color="#fff"
          fontSize={25}
          my={2}
          fontFamily="ClashGrotesk-Semibold">
          Country of Residence
        </Text>
        <Text color="#A2A3A3" fontFamily="ClashGrotesk-Medium">
          Terms & service applied to you will depend on your resident country
        </Text>

        <ScrollView>
          {countries?.map((country: Country) => (
            <Pressable
              onPress={() => handleCountrySelect()}
              key={country?.name?.common}>
              <Flex flexDirection="row" alignItems={'center'} gap={4} mb={5}>
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
              </Flex>
            </Pressable>
          ))}
        </ScrollView>
      </VStack>

      {loading && (
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          flexDirection={'column'}
          gap={3}>
          <Spinner color="#fff" size="xl" />
          <Text color="#fff">Fetching countries...</Text>
        </Box>
      )}
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
