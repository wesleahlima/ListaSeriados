import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, ScrollView, View, Text } from 'react-native';

import { styles } from './styles';

export function Details() {
    const navigation = useNavigation();
    const route = useRoute();
    const { title, imageURL, sinopse } = route.params;

    useEffect(() => {
        navigation.setOptions({ title })
    }, []);

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: `${imageURL}` }}
                />
                
                <Text style={styles.text}>
                    {sinopse}
                </Text>
            </View>
        </ScrollView>
    );
}