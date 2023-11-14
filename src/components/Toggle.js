import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import OnImage from '../assets/moon.svg';
import OffImage from '../assets/sun.svg';
import {COLOR} from '../styles/consts/GlobalStyles';
import ratio from '../styles/consts/ratio';

const {widthPixel} = ratio;
const SwitchWithIcon = ({onToggle}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    setIsDarkMode(!isDarkMode);
    onToggle && onToggle(newState);
  };
  return (
    <TouchableOpacity
      onPress={toggleSwitch}
      style={[
        styles.containerSwitch,
        {backgroundColor: isDarkMode ? COLOR.white : COLOR.black},
      ]}>
      <View
        style={[
          styles.circle,
          {transform: [{translateX: isEnabled ? 20 : 0}]},
        ]}>
        {isEnabled ? <OnImage width={30} /> : <OffImage width={30} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSwitch: {
    borderRadius: widthPixel(15),
    width: widthPixel(50),
    height: widthPixel(28),
    justifyContent: 'center',
  },
  circle: {
    width: widthPixel(30),
    height: widthPixel(30),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SwitchWithIcon;
