import Auth from './Auth'
import Api from './Api'
import Webhook from './Webhook'
import Web from './Web'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
Api: Object.assign(Api, Api),
Webhook: Object.assign(Webhook, Webhook),
Web: Object.assign(Web, Web),
Settings: Object.assign(Settings, Settings),
}

export default Controllers