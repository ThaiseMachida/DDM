import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={meuestilo.container}>
      <Text style={meuestilo.titulo}> 6INFO </Text>
      <Text style={meuestilo.subtitulo}>Bem vindo 6 INFO!!!</Text>
      <Image source={require('./assets/pug.gif')}
      style={{width: 150, height: 150}}/>
      <TextInput style={meuestilo.input}/>
      <StatusBar style="auto" />
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

  },

  subtitulo: {
  fontSize: 20,
  color:'white'
  },

  input: {
    backgroundColor: '#c45e5e',
    color: 'white',
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#e64545',

  }

});

