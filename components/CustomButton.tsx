import {StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'native-base';

interface CustomButtonProps {
  children: string;
  isDisabled?: boolean;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  isDisabled,
  onPress,
}) => {
  return (
    <Button
      style={styles.btn}
      _disabled={styles.disabledBtn}
      _text={styles.text}
      isDisabled={isDisabled}
      onPress={onPress}>
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    borderRadius: 100,
    backgroundColor: '#6771FF',
    height: 45,
  },

  disabledBtn: {
    backgroundColor: '#353973',
  },

  text: {
    fontFamily: 'ClashGrotesk-Semibold',
    color: '#fff',
  },
});

export default CustomButton;
