import {useState} from 'react';
import {View, Text} from 'react-native';
import Button from './Button';
import {COLOR, COMMON_STYLES} from '../styles/consts/GlobalStyles';

export default function MyKeyboard() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  const handleNumberPress = buttonValue => {
    if (result !== null) {
      setResult(null);
      setExpression('');
      setCurrentNumber(buttonValue);
    } else {
      setCurrentNumber(prev => prev + buttonValue);
    }
  };

  const handleOperationPress = buttonValue => {
    if (result !== null) {
      setExpression(result.toString() + buttonValue);
      setResult(null);
    } else if (currentNumber !== '') {
      setExpression(
        prevExpression => prevExpression + currentNumber + buttonValue,
      );
      setCurrentNumber('');
    }
  };

  const clearAll = () => {
    setCurrentNumber('');
    setExpression('');
    setResult(null);
  };

  const handleBackspace = () => {
    if (currentNumber.length > 0) {
      setCurrentNumber(currentNumber.slice(0, -1));
    } else if (expression.length > 0) {
      setExpression(expression.slice(0, -1));
    } else if (result !== null) {
      setResult(null);
    }
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
    if (currentNumber && currentNumber.length < 6) {
      return (
        <Text style={COMMON_STYLES.screenFirstNumber}>{currentNumber}</Text>
      );
    }
    if (currentNumber === '') {
      return <Text style={COMMON_STYLES.screenFirstNumber}>{'0'}</Text>;
    }
    if (currentNumber.length > 5 && currentNumber.length < 8) {
      return (
        <Text style={[COMMON_STYLES.screenFirstNumber, {fontSize: 70}]}>
          {currentNumber}
        </Text>
      );
    }
    if (currentNumber.length > 7) {
      return (
        <Text style={[COMMON_STYLES.screenFirstNumber, {fontSize: 50}]}>
          {currentNumber}
        </Text>
      );
    }
  };

  const getResult = () => {
    if (currentNumber !== '') {
      const fullExpression = expression + currentNumber;

      try {
        setResult(eval(fullExpression));
        setExpression(fullExpression);
        setCurrentNumber('');
      } catch (error) {
        setResult('Error');
      }
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
          {expression.replace(/\//g, '÷').replace(/\*/g, '×')}
          {currentNumber}
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
        <Button title="％" isGray onPress={() => handleOperationPress('%')} />
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
        <Button title="⌫" onPress={handleBackspace} />
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
