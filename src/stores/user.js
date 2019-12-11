import { observable } from 'mobx'

import BasicStore from './BasicStore'


class User extends BasicStore {

    constructor(...args) {
        super(...args)
    }

    @observable test = 'TEST'
    @observable email = ''
    @observable password = ''

    @observable user = null

    
}

export default User