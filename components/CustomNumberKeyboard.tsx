import React, {FC} from 'react';
import {Stack, Row, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import CustomButton from './CustomButton';
import TouchableScale from 'react-native-touchable-scale';
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomNumberKeyboardProps {
  onKeyPress: (value: string) => void;
  isDisabled?: boolean;
  onSubmit: () => void;
}

const CustomNumberKeyboard: FC<CustomNumberKeyboardProps> = ({
  onKeyPress,
  isDisabled,
  onSubmit,
}) => {
  const handleKeyPress = (value: string) => {
    onKeyPress(value);
  };

  return (
    <Stack style={styles.container} space={10}>
      <Row w="full" justifyContent={'space-around'} space={2}>
        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('1')}>
          <Text style={styles.text}>1</Text>
        </TouchableScale>

        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('2')}>
          <Text style={styles.text}>2</Text>
        </TouchableScale>

        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('3')}>
          <Text style={styles.text}>3</Text>
        </TouchableScale>
      </Row>

      <Row w="full" justifyContent={'space-around'}>
        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('4')}>
          <Text style={styles.text}>4</Text>
        </TouchableScale>

        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('5')}>
          <Text style={styles.text}>5</Text>
        </TouchableScale>
        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('6')}>
          <Text style={styles.text}>6</Text>
        </TouchableScale>
      </Row>
      <Row w="full" justifyContent={'space-around'}>
        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          tension={50}
          friction={7}
          onPress={() => handleKeyPress('7')}>
          <Text style={styles.text}>7</Text>
        </TouchableScale>

        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('8')}>
          <Text style={styles.text}>8</Text>
        </TouchableScale>

        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('9')}>
          <Text style={styles.text}>9</Text>
        </TouchableScale>
      </Row>
      <Row w="full" justifyContent={'space-around'}>
        <TouchableScale style={styles.touchableScale} activeScale={2}>
          <Text style={styles.text}> &nbsp;</Text>
        </TouchableScale>

        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('0')}>
          <Text style={styles.text}>0</Text>
        </TouchableScale>

        <TouchableScale
          style={styles.touchableScale}
          activeScale={1.4}
          onPress={() => handleKeyPress('del')}>
          <Icon name="chevron-back" size={24} color="#fff" />
        </TouchableScale>
      </Row>

      <CustomButton isDisabled={isDisabled} onPress={onSubmit}>
        Continue
      </CustomButton>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    alignItems: 'center',
  },
  btn: {
    width: 'auto',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 18,
    fontFamily: 'ClashGrotesk-Semibold',
    color: '#fff',
  },
  touchableScale: {
    flex: 1,
    width: 100,
    // backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomNumberKeyboard;
