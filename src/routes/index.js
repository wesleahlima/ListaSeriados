import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

export function Routes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontSize: 20,
                    textAlign: 'center'
                },
                headerStyle: {
                    backgroundColor: '#001'
                },
                headerTintColor: '#fff'
            }}
        >
            <Screen
                component={Home}
                name="Home"
                options={{
                    title: "Lista de Seriados"
                }}
            />
            <Screen
                component={Details}
                name="Details"
            />
        </Navigator>
    );
}