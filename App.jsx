import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ToastAndroid,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  const navigation = useNavigation();
  const [placa, setPlaca] = useState();

  const handleAdd = () => {
    navigation.navigate('AdicionarServico');
  };

  const handleList = () => {
    if (placa === '') {
      Alert.alert('PHSystem Tecnologia', 'Por Favor, Informe a Placa . . .');
      return placa;
    }

    // Lógica para lidar com o texto fornecido
    navigation.navigate('ListarServico', {
      placa,
    });
  };

  const handleSearch = () => {
    // Lógica a ser executada quando o botão "Procurar" for pressionado.
    console.log('Finalizar App');
    // ExitApp.exitApp();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ServiceCar</Text>
      <Text style={styles.titlePLaca}>Placa:</Text>
      <TextInput
        name='placa'
        style={(styles.input, { borderWidth: 1 })}
        value={placa}
        onChangeText={(text) => setPlaca(text)}
        placeholder='Informe a Placa . . .'
        autoFocus
        maxLength={8}
        onSubmitEditing={() => {
          this.TextInput.focus();
        }}
      />

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleList}>
          <Text style={styles.buttonText}>Listar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Fechar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ff8c00',
  },

  input: {
    fontSize: 44,
    marginTop: 1,
  },

  titlePLaca: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff8c00',
    marginTop: 1,
    marginBottom: 5,
    borderColor: '#f8f6',
  },

  buttonGroup: {
    flexDirection: 'column',
    padding: 8,
    width: 350,
    marginBottom: 5,
    marginVertical: 8,
  },

  button: {
    padding: 30,
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: 2,
    backgroundColor: 'blue',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
