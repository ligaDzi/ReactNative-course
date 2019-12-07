import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'

export class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }
    render() {
        const { email, password } = this.state

        return (
            <View>
                <Text style={styles.header}>Please Sign In</Text>

                <Text>Email:</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType='email-address'
                    value={email} 
                    onChangeText={this.setEmail}                 
                />

                <Text>Password:</Text>
                <TextInput 
                    style={styles.input}
                    secureTextEntry
                    value={password} 
                    onChangeText={this.setPassword} 
                />
            </View>
        )
    }

    setEmail = email => this.setState({ email }) 
    setPassword = password => this.setState({ password })       
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
