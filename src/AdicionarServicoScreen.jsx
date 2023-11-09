import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';

export default function AdicionarServicoScreen() {
  const [oficina, setOficina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [mesesGarantia, setMesesGarantia] = useState('');
  const [dataServico, setDataServico] = useState('');
  const [resultado, setResultado] = useState('');

  const handleAdicionarServico = async () => {
    try {
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
      setResultado(JSON.stringify(response.data));
    } catch (error) {
      // Lida com erros, por exemplo, exibindo uma mensagem de erro
      setResultado('Erro ao adicionar o serviço');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Serviço</Text>
      <TextInput
        style={styles.input}
        placeholder="Oficina"
        value={oficina}
        onChangeText={text => setOficina(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={text => setDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        value={valor}
        onChangeText={text => setValor(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Meses de Garantia"
        value={mesesGarantia}
        onChangeText={text => setMesesGarantia(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Data do Serviço"
        value={dataServico}
        onChangeText={text => setDataServico(text)}
      />
      <Button title="Adicionar Serviço" onPress={handleAdicionarServico} />
      {resultado && <Text>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
