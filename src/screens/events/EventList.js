import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

import eventStore from '../../stores/events'

import EventList from '../../components/event/EventList'


@observer
export class EventListScreen extends Component {
    
    static navigationOptions = {
        title: 'Event List'
    }

    componentDidMount() {
        eventStore.loadAll()
    }

    render() {
        const { navigation } = this.props

        if(eventStore.loading) return this.getLoader()

        return <EventList onEventPress={this.handleEventPress} navigation={navigation} events={eventStore.list} />
    }

    handleEventPress = (uid) => {
        this.props.navigation.navigate('event', { uid })
    }

    getLoader() {
        return <View><ActivityIndicator size='large'/></View>
    }

}

export default EventListScreen
