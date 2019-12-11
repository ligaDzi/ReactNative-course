import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import firebase from 'firebase'
import { View, Text, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native'

import userStore from '../../stores/user'

@observer
export class SignIn extends Component {

    render() {
        const { user } = this.props
        return (
            <View>
                <Text style={styles.header}>Please Sign In</Text>

                <Text>Email:</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='email-address'
                    value={user.email} 
                    onChangeText={this.setEmail}                 
                />

                <Text>Password:</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    value={user.password} 
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

        const { user } = this.props

        firebase.auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then( userEntity => {
                user.user = userEntity
                this.props.navigation.navigate('eventList')
            })
            .catch( err => console.error(err))
    }

    setEmail = email => this.props.user.email = email 
    setPassword = password => this.props.user.password = password
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

export default inject('user')( SignIn )
