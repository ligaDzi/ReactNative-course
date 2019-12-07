import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SignIn from './components/auth/SignIn'
import Event from './components/event/Event'

export class Root extends Component {
    render() {
        return (
            <View style={styles}>
                <Event />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      fontSize: 22
    },
  })

export default Root
