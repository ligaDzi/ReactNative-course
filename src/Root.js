import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import SignIn from './components/auth/SignIn'
import Event from './components/event/Event'
import EventList from './components/event/EventList'

export class Root extends Component {
    render() {
        return (
            <View style={styles}>
                <Image 
                    source={require('../assets/images/logo.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                <EventList />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      fontSize: 22
    },
    image: {
        width: '100%',
        height: 40,
        marginTop: 20
    }
  })

export default Root
