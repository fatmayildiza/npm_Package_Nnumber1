import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

// NumberVerification component'i, telefon numarası doğrulama için kullanılır.
// Props:
// - buttonColor: Buton rengini belirler. (Varsayılan: '#de1510')
// - buttonText: Buton üzerindeki metni belirler. (Varsayılan: 'Next Step')
// - inputWidth: Giriş kutusunun genişliğini belirler. (Varsayılan: '90%')
// - inputHeight: Giriş kutusunun yüksekliğini belirler. (Varsayılan: 70)
// - onVerification: Doğrulama başarılı olduğunda çağrılacak fonksiyon. (Varsayılan: boş bir fonksiyon)
const NumberVerification = ({ buttonColor, buttonText, inputWidth, inputHeight, onVerification }) => {
  // Kullanıcının girdiği telefon numarasını saklar.
  const [phoneNumber, setPhoneNumber] = useState('');

  // Girilen metni uygun bir telefon numarası formatına dönüştürür.
  const formatPhoneNumber = (text) => {
    const onlyNumbers = text.replace(/[^\d]/g, '');
    const formattedNumber = `(${onlyNumbers.slice(0, 3)})${onlyNumbers.slice(3)}`;
    setPhoneNumber(formattedNumber);
  };

  // Telefon numarasını doğrular ve onVerification callback fonksiyonunu çağırır.
  const validatePhoneNumber = () => {
    // Türkiye'deki bazı alan kodlarını kabul eden bir regex.
    const allowedAreaCodes = /^(532|533|534|535|536|537|538|539|540|541|542|543|544|545|546|547|548|549|550|551|552|553|554|555|556|557|558|559)\d{7}$/;
    const onlyNumbers = phoneNumber.replace(/[^\d]/g, '');

    // Alan kodu uygun mu ve numara 10 haneli mi kontrol edilir.
    if (allowedAreaCodes.test(onlyNumbers) && onlyNumbers.length === 10) {
      onVerification(true); // Doğrulama başarılı ise true değeri ile callback fonksiyonunu çağırır.
    } else {
      onVerification(false); // Doğrulama başarısız ise false değeri ile callback fonksiyonunu çağırır.
    }
  };

  return (
    <View>
      {/* Telefon numarası girişi için container */}
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

      {/* Doğrulama butonu */}
      <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={validatePhoneNumber}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

// Default props belirlenir.
NumberVerification.defaultProps = {
  buttonColor: '#de1510',
  buttonText: 'Next Step',
  inputWidth: '90%',
  inputHeight: 70,
  onVerification: () => {},
};

// Stil tanımlamaları
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
