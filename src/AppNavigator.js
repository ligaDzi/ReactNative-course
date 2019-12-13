import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { NavigationNativeContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Auth from './screens/Auth'
import Event from './screens/events/Event'
import EventList from './screens/events/EventList'
import PeopleList from './screens/people/PeopleList'


const Tab = createBottomTabNavigator()

function TabNavigator() {
    return (
        <NavigationNativeContainer>
            <Tab.Navigator>
                <Tab.Screen name="events" component={EventList} />
                <Tab.Screen name="people" component={PeopleList} />
            </Tab.Navigator>
        </NavigationNativeContainer>
    )
}

const AppNavigator = createStackNavigator({
    list: {
        screen: TabNavigator
    },
    auth: {
        screen: Auth
    },
    event: {
        screen: Event
    },
    eventList: {
        screen: EventList
    },
    peopleList: {
        screen: PeopleList
    }
}, {
    initialRouteName: 'list'
})

export default createAppContainer(AppNavigator)
