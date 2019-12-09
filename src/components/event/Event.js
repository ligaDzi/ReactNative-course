import React, { Component } from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'

import ConfirmModal from '../common/ConfirmModal'


export class Event extends Component {
    
    state = {
        confirmModal: false
    }

    render() {
        const { event } = this.props
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.header]}> {event.title} </Text>
                <View>
                    <Image 
                        source={{uri: 'http://lorempixel.com/200/100/sports'}}
                        style={styles.image}
                    />
                    <Text> {event.when} </Text>
                    <Text> {event.where} </Text>
                </View>
                <Text style={styles.text}> {event.url} </Text>
                <View style={styles.button}>
                    <Button 
                        title='Delete Event'
                        color='#F55'
                        onPress={this.handleDelete}
                    />   
                </View>
                <ConfirmModal
                    visible = {this.state.confirmModal}
                    onConfirm = {this.confirmDelete}
                    onCancel = {this.cancelDelete}
                >
                    Are you sure you want to delete "{event.title}"
                </ConfirmModal>
            </View>
        )
    }

    handleDelete = () => {
        console.log('Delete Event')
        this.setState({
            confirmModal: true
        })
    }
    confirmDelete = () => this.setState({ confirmModal: false })
    cancelDelete = () => this.setState({ confirmModal: false })
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 5
    },
    text: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
        height: 100
    },
    image: {
        width: 200,
        height: 100
    },
    button: {
        width: '100%',
        height: 125
    }
})

export default Event
