import { observable } from 'mobx'

import EntitiesStore from './EntitiesStore'


class User extends EntitiesStore {

    constructor(...args) {
        super(...args)
    }
    
    @observable email = ''
    @observable password = ''

    @observable user = null

    
}

export default User