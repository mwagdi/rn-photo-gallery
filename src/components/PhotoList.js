import React, { Component } from 'react';
import { View } from 'react-native';
import Photo from './Photo';

class PhotoList extends Component{
    componentDidMount(){
        this.props.fetchPhotos();
    }
    render(){
        const { photoIds, photosById, openModal } = this.props;
        return (
            <View>
                {photoIds.map(id => <Photo key={id} photo={photosById[id]} openModal={openModal} />)}
            </View>
        )
    }
}

export default PhotoList;