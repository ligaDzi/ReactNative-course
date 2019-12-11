import Events from './events'
import User from './user'


const stores = {}
stores.user = new User(stores)
stores.events = new Events(stores)

export default stores