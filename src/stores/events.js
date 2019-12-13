import { observable, computed, action } from 'mobx'
import firebase from 'firebase'
import { entitiesFromFB } from './utils'

import EntitiesStore, { loadAllHelper } from './EntitiesStore'

class Events extends EntitiesStore {

    @action loadAll = loadAllHelper('events')    
}

export const event = new Events()

export default Events