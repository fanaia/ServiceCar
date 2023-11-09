import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function App() {
  const navigation = useNavigation();

  const handleAdd = () => {
    navigation.navigate('AdicionarServico');
  };

  const handleSearch = () => {
    // Lógica a ser executada quando o botão "Procurar" for pressionado.
    console.log('Botão "Procurar" pressionado');
  };

  const handleList = () => {
    // Lógica a ser executada quando o botão "Listar" for pressionado.
    console.log('Botão "Listar" pressionado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ServiceCar</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Novo Serviço</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleList}>
          <Text style={styles.buttonText}>Listar Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Procurar</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  buttonGroup: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
  },
  button: {
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 3,
    backgroundColor: 'orange',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
