import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Text, Flex, Image, Button, ScrollView} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function DashboardScreen() {
  return (
    <ScrollView style={styles.container}>
      <Flex justify={'space-between'} flexDirection="row" align="center">
        <Flex flexDir="row" gap={3}>
          <Flex
            justify="center"
            align="center"
            w={8}
            h={8}
            bg="#FFC8DD"
            borderRadius={100}>
            <Text fontFamily="ClashGrotesk-Semibold">CC</Text>
          </Flex>
          <Text color="#fff" fontFamily="ClashGrotesk-Semibold" fontSize={20}>
            Home
          </Text>
        </Flex>
        <Icon name="scan" size={24} color="#fff" />
      </Flex>
      <Box bg="#171819" borderRadius={10} mt={15} px={4} py={6}>
        <Flex flexDir="row" justify="space-between" align="center">
          <Text color="#fff" fontFamily="ClashGrotesk-Semibold">
            NGN Balance
          </Text>

          <Flex
            bg="#2E2F31"
            w={60}
            h={35}
            align="center"
            px={2}
            flexDir="row"
            justify="space-between"
            borderRadius={100}>
            <Image
              source={{uri: 'https://flagcdn.com/w320/ng.png'}}
              alt="country-flag"
              style={{width: 20, height: 20, borderRadius: 100}}
            />
            <Icon name="chevron-down" size={19} color="#fff" />
          </Flex>
        </Flex>

        <Text
          fontSize={40}
          color="#fff"
          fontFamily="ClashGrotesk-Semibold"
          my={2}>
          ₦95,800.05
        </Text>

        <Flex flexDir="row" mt={4} gap={3}>
          <Button
            bg="#454647"
            w={'50%'}
            h={45}
            borderRadius={100}
            _text={{fontFamily: 'ClashGrotesk-Medium'}}>
            Add Money
          </Button>

          <Button
            bg="#454647"
            w={'50%'}
            h={45}
            borderRadius={100}
            _text={{fontFamily: 'ClashGrotesk-Medium'}}>
            Transfer
          </Button>
        </Flex>
      </Box>
      <Flex mt={5} flexDir="row" gap={3}>
        <Flex
          bg="#171819"
          h={176}
          w={'50%'}
          borderRadius={20}
          p={4}
          justify="space-between">
          <Flex
            bg="#2E2F31"
            w={52}
            h={52}
            borderRadius={100}
            justify="center"
            align="center">
            <FontAwesomeIcon name="bank" size={18} color="#fff" />
          </Flex>

          <Box>
            <Text color="#fff" fontFamily="ClashGrotesk-Medium">
              Bank Account
            </Text>
            <Text color="#6F6F6F" fontFamily="ClashGrotesk-Medium">
              Show account info
            </Text>
          </Box>
        </Flex>

        <Flex
          bg="#171819"
          h={176}
          w={'50%'}
          borderRadius={20}
          p={4}
          justify="space-between">
          <Flex
            bg="#2E2F31"
            w={52}
            h={52}
            borderRadius={100}
            justify="center"
            align="center">
            <FontAwesomeIcon name="send" size={18} color="#fff" />
          </Flex>

          <Box>
            <Text color="#fff" fontFamily="ClashGrotesk-Medium">
              Pay Bills
            </Text>
            <Text color="#6F6F6F" fontFamily="ClashGrotesk-Medium">
              Top-Up & utilities
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex bg="#171819" mt={4} p={4} py={8}>
        <Text color="#fff" fontSize={18} fontFamily="ClashGrotesk-Semibold">
          Do more with Shiga
        </Text>

        <Flex
          mt={3}
          flexDir="row"
          align="center"
          justify="space-between"
          mt={8}>
          <Flex flexDir="row" gap={3}>
            <Flex
              h={41}
              w={41}
              borderRadius={10}
              bg="#727AE4"
              justify="center"
              align="center">
              <Icon name="swap-vertical" size={20} color="#fff" />
            </Flex>
            <Box>
              <Text color="#fff">Convert Money</Text>
              <Text color="#A2A3A3">Swap between currencies</Text>
            </Box>
          </Flex>

          <FeatherIcon name="more-vertical" size={24} color="#6F6F6F" />
        </Flex>

        <Flex
          mt={3}
          flexDir="row"
          align="center"
          justify="space-between"
          mt={8}>
          <Flex flexDir="row" gap={3}>
            <Flex
              h={41}
              w={41}
              borderRadius={10}
              bg="#727AE4"
              justify="center"
              align="center">
              <FontAwesomeIcon name="graduation-cap" size={24} color="black" />
            </Flex>
            <Box>
              <Text color="#fff">Tuition Payment</Text>
              <Text color="#A2A3A3">Pay your tuition in seconds</Text>
            </Box>
          </Flex>

          <FeatherIcon name="chevron-right" size={24} color="#6F6F6F" />
        </Flex>
      </Flex>
    </ScrollView>
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
