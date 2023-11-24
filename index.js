import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const NumberVerification = ({ buttonColor, buttonText, inputWidth, inputHeight, onVerification }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (text) => {
    const onlyNumbers = text.replace(/[^\d]/g, '');
    const formattedNumber = `(${onlyNumbers.slice(0, 3)})${onlyNumbers.slice(3)}`;
    setPhoneNumber(formattedNumber);
  };

  const validatePhoneNumber = () => {
    const allowedAreaCodes = /^(532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|556|557|558|559)\d{7}$/;
    const onlyNumbers = phoneNumber.replace(/[^\d]/g, '');

    if (allowedAreaCodes.test(onlyNumbers) && onlyNumbers.length === 10) {
      onVerification(true);
    } else {
      onVerification(false);
    }
  };

  return (
    <View>
      <View style={[styles.contentContainer, { width: inputWidth, height: inputHeight }]}>
        <Text style={styles.countryCode}>+90</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={(text) => formatPhoneNumber(text)}
        />
      </View>
      <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={validatePhoneNumber}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

NumberVerification.defaultProps = {
  buttonColor: '#de1510',
  buttonText: 'Next Step',
  inputWidth: '90%',
  inputHeight: 70,
  onVerification: () => {},
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryCode: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 5,
    color: 'black',
  },
  button: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default NumberVerification;
