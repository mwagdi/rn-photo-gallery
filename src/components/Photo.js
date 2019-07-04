import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default ({ photo, openModal }) => (
    <TouchableOpacity onPress={() => openModal(photo)}>
        <Text style={styles.title}>{photo.title}</Text>
        <Image style={styles.image} source={{uri: photo.src}} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        textAlign: "center"
    },
    image: {
        height: 100,
        width: 200
    }
})