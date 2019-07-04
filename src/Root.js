import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Modal,
    TouchableHighlight,
    Image,
    TextInput,
    Button
} from 'react-native';
import { Icon } from 'react-native-elements';
import PhotoListContainer from './containers/PhotoListContainer';
import { connect } from 'react-redux';
import { closeModal, addComment } from './store/actions'

class Root extends Component{
    state = {
        commentInput: ""
    }
    render(){
        const { photo, open, closeModal, addComment } = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Photo Gallery</Text>
                <ScrollView style={styles.scrollview}>
                    <PhotoListContainer />
                </ScrollView>
                <Modal
                animationType="slide"
                transparent={false}
                visible={open}
               >
                <View style={{marginTop: 22, padding: 10}}>
                    <View>
                    <Text>{photo.title}</Text>

                    <TouchableHighlight
                        style={{position: 'absolute', right: 0}}
                        onPress={() => {
                            closeModal();
                            this.setState({ commentInput: "" })
                        }}>
                        <Icon
                            name='close' />
                    </TouchableHighlight>
                    <Image style={styles.image} source={{uri: photo.src}} />
                    {photo.comments &&
                    <View>
                        <Text>Comments</Text>
                        {photo.comments.map((comment, i) => <Text key={`comment${i}`}>{comment}</Text>)}
                        <TextInput
                            style={{
                                height: 40,
                                borderColor: 'gray',
                                borderWidth: 1,
                                marginBottom: 10
                            }}
                            onChangeText={commentInput => this.setState({commentInput})}
                            value={this.state.commentInput}
                        />
                        <Button
                        onPress={() => {
                            addComment(photo.id, this.state.commentInput);
                            this.setState({ commentInput: "" })
                        }}
                        title="ADD COMMENT"
                        color="#1f67db"
                        />
                    </View>}
                    
                    </View>
                </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollview: {
        flex: 1
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        width: "100%",
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: 300
    }
});

const mapStateToProps = state => {
    const {  open, photo } = state.modal
    return {
        open,
        photo
    }
}

export default connect(mapStateToProps, { closeModal, addComment })(Root);