import React from 'react';
import { 
  FlatList, 
  Image, 
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text 
} from 'react-native';
import seriados from './src/seriados/Seriados';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Seriados</Text>
      <FlatList 
        data={seriados}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.seriadoContainer}>
              <Text style={styles.tituloSeriado}>{item.title}</Text>
              <View>
                <Image style={styles.imagem} source={{ uri: `${item.imageURL}` }} />
              </View>
              <View style={styles.sinopseContainer}>
                <Text style={styles.textoSinopse}>{item.sinopse}</Text>
              </View>
            </View>
          )
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 35,
    textAlign: 'center',
  },
  seriadoContainer: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  tituloSeriado : {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  imagem: {
    borderRadius: 10,
    width: 267,
    height: 400,
    marginBottom: 10,
  },
  sinopseContainer: {
    marginBottom: 5,
    marginHorizontal: 8,
  },
  textoSinopse: {
    fontSize: 20,
    textAlign: 'center',
  }
});
