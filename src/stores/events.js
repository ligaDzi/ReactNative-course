import { observable, computed, action } from 'mobx'
import firebase from 'firebase'
import { entitiesFromFB } from './utils'

import BasicStore from './BasicStore'

class Events extends BasicStore {

    constructor(...args) {
        super(...args)
    }

    @observable loading = false
    @observable loaded = false

    @observable entities = {}

    @computed get list() { 
        return Object.values(this.entities) 
    }

    @computed get size() { 
        return Object.keys(this.entities).length
    }

    @action loadAll() {
        this.loading = true

        //Проверка получения информации из другого стора
        console.log('------', 'email', this.getStore('user').test)

        firebase.database().ref('events')
            .once('value')
            .then(data => {
                this.entities = entitiesFromFB(data.val())
                this.loading = false
                this.loaded = true
            })
            .catch(err => console.error(err))
    }
}

export const event = new Events()

export default Events