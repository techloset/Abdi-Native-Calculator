import {useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {ThemeContext} from './src/context/ThemeContext';
import {COLOR} from './src/styles/consts/GlobalStyles';
import MyKeyboard from './src/components/MyKeyboard';
import SwitchWithIcon from './src/components/Toggle';
import ratio from './src/styles/consts/ratio';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <StatusBar hidden />
      <SafeAreaView
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: 'black'}]
        }>
        <SwitchWithIcon
          onToggle={value => setTheme(value ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: ratio.pixelSizeVertical(20),
  },
});
