import React, { Component } from 'react'
import { observer } from 'mobx-react'
import firebase from 'firebase'
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'

import userStore from '../../stores/user'

@observer
export class SignIn extends Component {

    render() {
        return (
            <View>
                <Text style={styles.header}>Please Sign In</Text>

                <Text>Email:</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='email-address'
                    value={userStore.email} 
                    onChangeText={this.setEmail}                 
                />

                <Text>Password:</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    value={userStore.password} 
                    onChangeText={this.setPassword} 
                />
                <TouchableOpacity onPress={this.signIn}>
                    <Text>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        )
    }

    signIn = () => {
        console.log('-----', 'Sign In')

        firebase.auth()
            .signInWithEmailAndPassword(userStore.email, userStore.password)
            .then( user => {
                userStore.user = user
                this.props.navigation.navigate('eventList')
            })
            .catch( err => console.error(err))
    }

    setEmail = email => userStore.email = email 
    setPassword = password => userStore.password = password
}

const styles = {
    header: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    input: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
}

export default SignIn
