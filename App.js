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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from './src/screens/TelaPrincipal';
import TelaSeriado from './src/screens/TelaSeriado';

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="TelaPrincipal"
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen 
            component={TelaPrincipal}
            name="TelaPrincipal"
          />
          <Stack.Screen 
            component={TelaSeriado}
            name="TelaSeriado"
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}