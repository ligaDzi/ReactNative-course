import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { View, Text, Button, StyleSheet } from 'react-native'

import Event from '../../components/event/Event'

import { eventList } from '../../fixtures'


@observer
export class EventScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `Event ${navigation.state.params.uid}`
    })

    render() {
        const { navigation, events } = this.props
        
        const uid = navigation.getParam('uid')
        const event = events.entities[uid]

        return (
            <View>
                <Text>Month: {event.month}</Text>
                <Event event={event} />
            </View>
        )
    }
}

export default inject('events')( EventScreen )
