import Events from './events'
import User from './user'
import People from './people'


const stores = {}
stores.user = new User(stores)
stores.events = new Events(stores)
stores.people = new People(stores)

export default stores