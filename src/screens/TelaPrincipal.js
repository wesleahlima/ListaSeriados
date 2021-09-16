import React from 'react';
import { 
  FlatList, 
  Image, 
  SafeAreaView,
  StatusBar, 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity
} from 'react-native';
import seriados from '../database/seriados';

export default function App({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />
      <Text style={styles.titulo}>Lista de Seriados</Text>
      <FlatList 
        data={seriados}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.seriadoContainer}>
              <View>
                <Image style={styles.imagem} source={{ uri: `${item.imageURL}` }} />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("TelaSeriado", item)}>
                <Text style={styles.tituloSeriado}>{item.title}</Text>
              </TouchableOpacity>
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
    marginBottom: 10,
    marginTop: 5,
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
  imagem: {
    borderRadius: 10,
    width: 267,
    height: 400,
    marginBottom: 5,
  },
  tituloSeriado : {
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: 15,
    textAlign: 'center',
  },
});
