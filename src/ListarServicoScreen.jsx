import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListarServicoScreen = () => {
  
  console.log("ListarServicoScreen")
  const [loading, setLoading] = useState(false);
  const [servicos, setServicos] = useState();
  const placa = route.params?.placa;

  
  const listar = async () => {
      
    setLoading(true);
    try {
      const url = 'https://us-central1-servicecar-33601.cloudfunctions.net/api/servico/listar?placa=${placa}';
      const parametros = {
        placa: placa
      };
      console.log('parametros')
      const response = await axios.get(url, { params: parametros })
      
      console.log(response.data);
      
      setServicos(response.data); // Assumindo que a resposta da API contém os serviços
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    
    listar();
    
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listar Serviço</Text>
      {loading ? (
        <ActivityIndicator size="small" color="#ffffff" />
      ) : (
        <View>
          
          {servicos?.map((servico, index) => (
            <View style={styles.Card} key={index}>
              <Text style={styles.CardText}>{servico.placa}</Text>
              <Text style={styles.CardText}>{servico.oficina}</Text>
              <Text style={styles.CardText}>{servico.descricao} {"  Valor: "}{servico.valor}</Text>
              <Text style={styles.CardText}>{servico.dataservico}</Text>
              
            </View >
          ))}
        </View >
      )}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  msg: {
    fontSize: 18,
    marginBottom: 16,
    color: '#F00',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    color: '#000',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  Card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 30,
    borderWidth: 2,
    height:100,
    margin:2,
  },

  CardText: {
    fontSize: 12,
    padding:1,
  },
});

export default ListarServicoScreen;