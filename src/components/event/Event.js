import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import { eventList } from '../../fixtures'

export class Event extends Component {

    static defaultProps = {
        events: eventList[0]
    }
    
    render() {
        const { events } = this.props
        return (
            <View style={styles.container}>
                <Text style={[styles.text, styles.header]}> {events.title} </Text>
                <View>
                    <Image 
                        source={{uri: 'http://lorempixel.com/200/100/sports'}}
                        style={styles.image}
                    />
                    <Text> {events.when} </Text>
                    <Text> {events.where} </Text>
                </View>
                <Text style={styles.text}> {events.url} </Text>
            </View>
        )
    }
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
    }
})

export default Event
