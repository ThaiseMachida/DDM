import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [nome, setNome] = useState ('');
  const [endereço, setEndereço] = useState ('');
  const [email, setEmail] = useState ('');
  const [ano, setAno] = useState ('0');
  let resultado = 0;

  const Enviar = () => {
    alert("O nome do usuário é: " + nome);
    resultado = 2024 - ano;
    alert("Você tem " + resultado + " anos.")
  }

  return (
    <View style={meuestilo.container}>
      <Text style={meuestilo.titulo}> 6INFO </Text>
      <Text style={meuestilo.subtitulo}>Bem vindo ao 6 INFO!!!</Text>
      <Image source={require('./assets/pug.gif')} style={{width: 150, height: 150}}/>

      <Text style={meuestilo.label}>Nome:</Text>
      <TextInput 
        style={meuestilo.input} 
        placeholder='Nome'
        defaultValue='nome'
        onChangeText={texto => setNome(texto)}
      />

      <Text style={meuestilo.label}>Endereço:</Text>
      <TextInput 
        style={meuestilo.input} 
        placeholder='Endereço'
        defaultValue='endereço'
        onChangeText={texto => setEndereço(texto)}
      /> 

      <Text style={meuestilo.label}>E-mail:</Text>
      <TextInput 
        style={meuestilo.input}
        placeholder='E-mail'
        defaultValue='email'
        onChangeText={texto => setEmail(texto)}
        keyboardType='email-address'

      />

      <Text style={meuestilo.label}>Ano Nascimento:</Text>
      <TextInput 
        style={meuestilo.input} 
        placeholder='ano'
        onChangeText={numero => setAno(numero)}
        keyboardType='numeric'

      />

      <Button title= 'Enviar' onPress={Enviar}/>
    </View>
  );
}

const meuestilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d6c6a5',
  },

  titulo: {
    fontSize: 40,
    color: '#c44551',
    fontStyle: 'italic',
    textShadowColor: 'white',
    textShadowOffset: {width: 2, height: -2},
    textShadowRadius: 10,
    textDecorationLine:'underline',

  },

  subtitulo: {
  fontSize: 20,
  color:'white'
  },

  input: {
    width: "80%",
    padding: 2,
    backgroundColor: '#c45e5e',
    color: 'white',
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#e64545',
    borderRadius: 10,
    margin: 5,

  },

  label: {
    width: "80%",
    color: 'white',

  },

});

