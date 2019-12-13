import React, { Component } from 'react'
import {observer, inject} from 'mobx-react'
import {View, StyleSheet, ActivityIndicator} from 'react-native'
import PeopleList from '../../components/people/PeopleList'

@observer
class PeopleListScreen extends Component {

    static navigationOptions = {
        title: 'People List'
    }

    componentDidMount() {
        const { people } = this.props
        
        if (!people.loaded && !people.loading) people.loadAll()
    }

    render() {
        const { people } = this.props

        if (people.loading) return this.getLoader()

        return <PeopleList />
    }

    getLoader() {
        return <View><ActivityIndicator size='large'/></View>
    }

}

const styles = StyleSheet.create({
})

export default inject('people')(PeopleListScreen)