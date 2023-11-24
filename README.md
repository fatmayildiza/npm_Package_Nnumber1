# Number Verification React Native Component

Number Verification React Native Component is a customizable and easy-to-use component for validating phone numbers in React Native applications.

## Installation

Install the package using npm:

```bash
npm install npm i phone-number-verification-tr2
```
## Usage

Import the NumberVerification component into your React Native project and use it in your screen or component:

```javascript

import React from 'react';
import { View, StyleSheet } from 'react-native';
import NumberVerification from 'npm i phone-number-verification-tr2';

const MyScreen = () => {
  const handleVerification = (isSuccessful) => {
    if (isSuccessful) {
      console.log('Phone number is valid!');
      // Perform actions for successful verification
    } else {
      console.log('Phone number is not valid.');
      // Handle invalid phone number
    }
  };

  return (
    <View style={styles.container}>
      <NumberVerification
        buttonColor="#de1510"
        buttonText="Next Step"
        inputWidth="90%"
        inputHeight={70}
        onVerification={handleVerification}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyScreen;
```

## Props

- buttonColor: Color of the verification button. Default is #de1510.
- buttonText: Text displayed on the verification button. Default is Next Step.
- inputWidth: Width of the phone number input. Default is 90%.
- inputHeight: Height of the phone number input. Default is 70.
onVerification: Callback function triggered after verification. Receives a boolean parameter indicating the success of verification.

## Customization

You can customize the appearance and behavior of the NumberVerification component by adjusting the provided props.

Example:

<NumberVerification
  buttonColor="#4CAF50"
  buttonText="Verify Now"
  inputWidth="80%"
  inputHeight={50}
  onVerification={handleVerification}
/>

## License

This project is licensed under the MIT License - see the LICENSE file for details.

