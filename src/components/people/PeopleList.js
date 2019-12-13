import React, { Component } from 'react'
import { View, Text, ActivityIndicator, SectionList, StyleSheet } from 'react-native'
import { observer, inject } from 'mobx-react'

import PersonCard from './PersonCard'


@observer
export class PeopleList extends Component {

    componentDidMount() {
        const { people } = this.props

        if (!people.loaded) people.loadAll()
    }

    render() {
        const {  people } = this.props

        if (people.loading) return <ActivityIndicator size='large'/>

        return <SectionList
            sections = {people.sections}
            renderSectionHeader = {({section}) => <Text style={styles.header}>{section.title}</Text>}
            renderItem = {({item}) => <PersonCard person = {item.person}/>}
        />
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F0F0F0',
        height: 40,
        lineHeight: 40,
        marginBottom: 5,
        shadowOffset: {
            height: 2, width: 0
        },
        shadowOpacity: 0.3,
        elevation: 3
    }
})

export default inject('people')(PeopleList)
