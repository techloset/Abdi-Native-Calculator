import {useState} from 'react';
import Button from './Button';
import {View, Text} from 'react-native';
import {COLOR, COMMON_STYLES} from '../styles/consts/GlobalStyles';

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);

  const handleNumberPress = buttonValue => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
    if (result !== null) {
      clearAll();
      setFirstNumber(buttonValue);
    }
  };

  const handleOperationPress = buttonValue => {
    if (firstNumber != '') {
      setOperation(buttonValue);
      setSecondNumber(firstNumber);
      setFirstNumber('');
    }
    if (operation !== null) {
      clearAll();
      setOperation(buttonValue);
      setSecondNumber(firstNumber);
      setFirstNumber('');
    }
    if (result !== null) {
      setOperation(buttonValue);
      setSecondNumber(result);
      setFirstNumber('');
    }
  };
  const clear = () => {
    setResult(null);
  };
  const clearAll = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };
  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            parseInt(result) < 99999
              ? [COMMON_STYLES.screenFirstNumber, {color: COLOR.result}]
              : [
                  COMMON_STYLES.screenFirstNumber,
                  {fontSize: 50, color: COLOR.result},
                ]
          }>
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={COMMON_STYLES.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber === '') {
      return <Text style={COMMON_STYLES.screenFirstNumber}>{'0'}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[COMMON_STYLES.screenFirstNumber, {fontSize: 70}]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[COMMON_STYLES.screenFirstNumber, {fontSize: 50}]}>
          {firstNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    clear();
    switch (operation) {
      case '+':
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case '-':
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case '*':
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case '/':
        if (parseInt(firstNumber) !== 0) {
          clear();
          setResult(parseInt(secondNumber) / parseInt(firstNumber));
        } else {
          clear();
        }
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };

  return (
    <View style={COMMON_STYLES.viewBottom}>
      <View
        style={{
          height: 120,
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}>
        <Text style={COMMON_STYLES.screenSecondNumber}>
          {secondNumber}
          <Text style={{color: COLOR.gray, fontSize: 50, fontWeight: '500'}}>
            {operation}
          </Text>
          {firstNumber}
        </Text>
        {firstNumberDisplay()}
      </View>
      <View style={COMMON_STYLES.row}>
        <Button title="C" isGray onPress={clearAll} />
        <Button
          title="+/-"
          isGray
          onPress={() => handleOperationPress('+/-')}
        />
        <Button title="％" isGray onPress={() => handleOperationPress('％')} />
        <Button title="÷" isBlue onPress={() => handleOperationPress('/')} />
      </View>
      <View style={COMMON_STYLES.row}>
        {[7, 8, 9].map(num => (
          <Button
            key={num}
            title={num.toString()}
            onPress={() => handleNumberPress(num.toString())}
          />
        ))}
        <Button title="×" isBlue onPress={() => handleOperationPress('*')} />
      </View>
      <View style={COMMON_STYLES.row}>
        {[4, 5, 6].map(num => (
          <Button
            key={num}
            title={num.toString()}
            onPress={() => handleNumberPress(num.toString())}
          />
        ))}
        <Button title="-" isBlue onPress={() => handleOperationPress('-')} />
      </View>
      <View style={COMMON_STYLES.row}>
        {[1, 2, 3].map(num => (
          <Button
            key={num}
            title={num.toString()}
            onPress={() => handleNumberPress(num.toString())}
          />
        ))}
        <Button title="+" isBlue onPress={() => handleOperationPress('+')} />
      </View>
      <View style={COMMON_STYLES.row}>
        <Button title="." onPress={() => handleNumberPress('.')} />
        <Button title="0" onPress={() => handleNumberPress('0')} />
        <Button
          title="⌫"
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
        />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
