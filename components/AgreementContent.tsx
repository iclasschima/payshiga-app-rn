import {StyleSheet} from 'react-native';
import React from 'react';
import {Box, Flex, Pressable, Text, Button} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

interface AgreementContentProps {
  toggleSheet: () => void;
  handleClick: () => void;
}

const AgreementContent = ({
  toggleSheet,
  handleClick,
}: AgreementContentProps) => {
  return (
    <>
      <Flex
        mb={4}
        flexDir={'row'}
        alignItems={'center'}
        w="100%"
        justify="space-between">
        <Text fontSize="22" color="#fff" fontFamily="ClashGrotesk-Semibold">
          Important Notice
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
      <Box w="100%" h={'fit'} pb={10} justifyContent="center">
        <Text fontSize="16" color="#fff" fontFamily="ClashGrotesk-Regular">
          All interactions and transitions across the span of this flow are
          intentional, important, and mandatory to follow.{' '}
          <Text color="#4B92F7">All Active CTA “buttons” </Text>
          should have a short zoom-in effect when tapped on.
        </Text>

        <Text mt={5} color="#fff">
          Use the <Text color="#4B92F7">Preview</Text> feature on Figma to view
          the prototype. Best of Luck!!
        </Text>
      </Box>

      <Button
        onPress={handleClick}
        style={styles.understandBtn}
        _text={{fontWeight: 600}}>
        I Understand
      </Button>
    </>
  );
};

export default AgreementContent;

const styles = StyleSheet.create({
  understandBtn: {
    height: 45,
    width: 300,
    borderRadius: 100,
    backgroundColor: '#F6BE2C',
  },
});
