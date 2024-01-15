import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [alaraja, setAlaraja] = useState(0);
  const [ylaraja, setYlaraja] = useState(0);
  
  const calculate = () => {
    if (age) {
      const ala = Math.round((220 - (age)) * 0.65);
      const yla = Math.round((220 - (age)) * 0.85);

      setAlaraja(ala);
      setYlaraja(yla);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
      placeholder='Enter your age' 
      keyboardType='decimal-pad'
      value={age}
      onChangeText={text => setAge(text)}
      style={styles.field}
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{`${alaraja}-${ylaraja}bpm`}</Text>
      <Button title='Calculate' onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  field: {
    marginBottom: 10,

  }
});