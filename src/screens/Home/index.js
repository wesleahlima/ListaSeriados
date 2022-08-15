import React from 'react';
import { FlatList, View } from 'react-native';

import { Card } from '../../components/Card';
import { data } from '../../data';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Card details={item} />}
            />
        </View>
    );
}