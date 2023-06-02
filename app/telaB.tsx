import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import { Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.imagem}
        source={{
          uri: './assets/club.png',
        }}

        
      />
      <StatusBar style="auto" />
      <Text style= {styles.titulo}>CADASTRO</Text>
      <TextInput style={styles.inputlogin} placeholder="Nome"/>
       <TextInput style={styles.inputlogin} placeholder="Email"/>
       <TextInput style={styles.inputlogin} placeholder="data de nascimento"/>
       <TextInput style={styles.inputlogin} placeholder="CPF"/>
       <TouchableOpacity style={styles.button}>
        <Text>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sair}>
        <Text>sair</Text>
      </TouchableOpacity>
      
      <Link href="/Home">voltar para home</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  imagem: {
    width: 300,
    height: 300,
    BorderRadius: 20,
  },
  inputlogin:{
    widht: 1000,
    borderRadius: 5,
    margin: 8,
    padding: 4.5,
    backgroundColor: 'rgba(0, 0, 300, 0.7)',
  },

  button:{
    margin: 15,
   padding: 8,
   textAlign: 'center',
   width: 100,
   borderRadius: 10,
   backgroundColor: '#rgba(0, 0, 0, 0.4)',
   fontSize: 10
 },

 sair: {
  margin: 1,
   padding: 8,
   textAlign: 'center',
   width: 80,
   borderRadius: 10,
   backgroundColor: '#rgba(0, 0, 0, 0.4)',
   fontSize: 10
 }
  
});
