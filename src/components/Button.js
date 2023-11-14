import {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {COMMON_STYLES} from '../styles/consts/GlobalStyles';

export default function Button({title, onPress, isBlue, isGray}) {
  const theme = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={
        isBlue
          ? COMMON_STYLES.btnBlue
          : isGray
          ? COMMON_STYLES.btnGray
          : theme === 'light'
          ? COMMON_STYLES.btnLight
          : COMMON_STYLES.btnDark
      }
      onPress={onPress}>
      <Text
        style={
          isBlue || isGray
            ? COMMON_STYLES.smallTextLight
            : theme === 'dark'
            ? COMMON_STYLES.smallTextLight
            : COMMON_STYLES.smallTextDark
        }>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
