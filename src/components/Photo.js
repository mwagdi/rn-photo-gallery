import React from 'react';
import { View, Text, Image } from 'react-native';

export default ({ photo }) => (
    <View>
        <Text>{photo.title}</Text>
        <Image src={{uri: photo.src}} />
    </View>
)