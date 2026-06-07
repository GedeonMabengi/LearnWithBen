import StripeController from './StripeController'
import PayPalController from './PayPalController'
import LiveKitController from './LiveKitController'
const Webhook = {
    StripeController: Object.assign(StripeController, StripeController),
PayPalController: Object.assign(PayPalController, PayPalController),
LiveKitController: Object.assign(LiveKitController, LiveKitController),
}

export default Webhook