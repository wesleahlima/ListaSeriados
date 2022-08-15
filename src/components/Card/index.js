import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo as Icon } from '@expo/vector-icons';

import { styles } from './styles';

export function Card({ details }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: `${details.imageURL}` }}
            />

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Details", details)}
            >
                <Text style={styles.title}>
                    {details.title}
                </Text>
                <Icon
                    color="#001"
                    name="chevron-right"
                    size={26}
                />
            </TouchableOpacity>
        </View>
    );
}