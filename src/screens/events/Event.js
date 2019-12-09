import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import Event from '../../components/event/Event'

import { eventList } from '../../fixtures'

export class EventScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Event ${navigation.state.params.uid}`
    })

    render() {
        const uid = this.props.navigation.getParam('uid')
        const event = eventList.filter( event => event.uid === uid)[0]

        return (
            <View>
                <Text>Month: {event.month}</Text>
                <Event event={event} />
            </View>
        )
    }
}

export default EventScreen
