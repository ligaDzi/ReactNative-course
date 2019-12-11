import './src/initFB'
import React from 'react'
import { Provider } from 'mobx-react'
import { StyleSheet, Text, View } from 'react-native'

import stores from './src/stores'

import AppNavigator from './src/AppNavigator'

export default function App() {
  return ( 
    <Provider {...stores}>
      <AppNavigator />
    </Provider>
  )
}
