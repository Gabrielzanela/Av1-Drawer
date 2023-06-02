import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import { Image,} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.imagem}
        source={{
          uri: './assets/club.png',
        }}
      />
      <Text style={styles.titulo}>PENGUIM APP</Text>
      <Text style={styles.paragrafo}> 
       <p>Penguim app é o aplicativo oficial do popular Club Penguin que lhe dá acesso <br/>a uma enorme comunidade de jogadores <br/>para que se possa divertir em qualquer altura e em qualquer lugar.<br />Os jogadores do Club Penguin (normalmente crianças) precisam da autorização de um adulto para abrir uma conta.</p>   
      </Text>
      <StatusBar style="auto" />
      <Link href="/telaB">ir para tela de cadastro</Link>
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
    fontWeight: 'bold', 
  },
  imagem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    BorderRadius: 20,
  },
  paragrafo: {
    fontSize: 24,
    fontWeight: 'normal', 
  }
});
