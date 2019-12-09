import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import Card from '../common/Card'

export class EventCard extends Component {
    render() {
        return (
            <Card style={styles.container}>
                <Image 
                    source={{uri: 'http://lorempixel.com/200/100/sports'}}
                    style={styles.image}
                />
                <View style={styles.description}>
                    <Text> {this.props.event.title} </Text>
                    <Text> {this.props.event.url} </Text>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 50
    },
    container: {
        flexDirection: 'row'
    },
    description: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
})

export default EventCard
