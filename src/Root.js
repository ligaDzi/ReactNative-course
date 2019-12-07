import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import SignIn from './components/auth/SignIn'
import Hello from './components/Hello'

export class Root extends Component {
    render() {
        return (
            <View style={styles}>
                <SignIn />
                <Hello />
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
