import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import EventList from '../../components/event/EventList'

export class EventListScreen extends Component {
    
    static navigationOptions = {
        title: 'Event List'
    }

    render() {
        const { navigation } = this.props
        return <EventList onEventPress={this.handleEventPress} navigation={navigation} />
    }

    handleEventPress = (uid) => {
        this.props.navigation.navigate('event', { uid })
    }
}

export default EventListScreen
