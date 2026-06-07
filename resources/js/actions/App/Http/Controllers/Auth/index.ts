import AuthenticatedSessionController from './AuthenticatedSessionController'
import PasswordResetLinkController from './PasswordResetLinkController'
import NewPasswordController from './NewPasswordController'
import RegisteredUserController from './RegisteredUserController'
import SocialiteController from './SocialiteController'
const Auth = {
    AuthenticatedSessionController: Object.assign(AuthenticatedSessionController, AuthenticatedSessionController),
PasswordResetLinkController: Object.assign(PasswordResetLinkController, PasswordResetLinkController),
NewPasswordController: Object.assign(NewPasswordController, NewPasswordController),
RegisteredUserController: Object.assign(RegisteredUserController, RegisteredUserController),
SocialiteController: Object.assign(SocialiteController, SocialiteController),
}

export default Auth