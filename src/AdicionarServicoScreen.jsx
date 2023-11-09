import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function AdicionarServicoScreen() {
  const [loading, setLoading] = useState(false);

  const [oficina, setOficina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [mesesGarantia, setMesesGarantia] = useState('');
  const [dataServico, setDataServico] = useState('');

  const [resultado, setResultado] = useState('');

  const handleAdicionarServico = async () => {
    try {
      setLoading(true);

      const servico = {
        oficina,
        descricao,
        valor,
        mesesGarantia,
        dataServico,
      };

      const response = await axios.post(
        'https://us-central1-servicecar-33601.cloudfunctions.net/api/servico/adicionar',
        servico,
      );

      // Define o resultado com a resposta da API
      setResultado(response.data);
      setLoading(false);
    } catch (error) {
      // Lida com erros, por exemplo, exibindo uma mensagem de erro
      setResultado('Erro ao adicionar o serviço');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Serviço</Text>
      <TextInput
        style={styles.input}
        placeholder="Oficina"
        placeholderTextColor={333}
        value={oficina}
        onChangeText={text => setOficina(text)}
      />
      <TextInput
        style={[styles.input, {height: 120, textAlignVertical: 'top'}]}
        placeholder="Descrição"
        placeholderTextColor={333}
        value={descricao}
        onChangeText={text => setDescricao(text)}
        multiline={true}
        numberOfLines={4}
      />

      <TextInput
        style={styles.input}
        placeholder="Meses de Garantia"
        placeholderTextColor={333}
        value={mesesGarantia}
        onChangeText={text => setMesesGarantia(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        placeholderTextColor={333}
        value={valor}
        onChangeText={text => setValor(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data do Serviço"
        placeholderTextColor={333}
        value={dataServico}
        onChangeText={text => setDataServico(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAdicionarServico}
        disabled={loading}>
        <View>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.buttonText}>Adicionar Serviço</Text>
          )}
        </View>
      </TouchableOpacity>
      {resultado && <Text style={styles.msg}>{resultado}</Text>}
    </View>
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
});
