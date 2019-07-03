import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PhotoListContainer from './containers/PhotoListContainer';

class Root extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Photo Gallery</Text>
                <ScrollView>
                    <PhotoListContainer />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Root;