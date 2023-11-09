import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
      <Button title="Adicionar" onPress={handleAdd} />
      <Button title="Procurar" onPress={handleSearch} />
      <Button title="Listar" onPress={handleList} />
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
});
