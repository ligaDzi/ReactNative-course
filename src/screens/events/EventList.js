import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'


import EventList from '../../components/event/EventList'


@observer
export class EventListScreen extends Component {
    
    static navigationOptions = {
        title: 'Event List'
    }

    componentDidMount() {
        this.props.events.loadAll()
    }

    render() {
        const { navigation, events } = this.props

        if(events.loading) return this.getLoader()

        return <EventList onEventPress={this.handleEventPress} navigation={navigation} events={events.list} />
    }

    handleEventPress = (uid) => {
        this.props.navigation.navigate('event', { uid })
    }

    getLoader() {
        return <View><ActivityIndicator size='large'/></View>
    }

}

export default inject('events')(EventListScreen)
