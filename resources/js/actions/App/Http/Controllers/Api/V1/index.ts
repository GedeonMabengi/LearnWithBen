import AuthController from './AuthController'
import SocialAuthController from './SocialAuthController'
import Teacher from './Teacher'
import Student from './Student'
import LiveKitController from './LiveKitController'

const V1 = {
    AuthController: Object.assign(AuthController, AuthController),
    SocialAuthController: Object.assign(SocialAuthController, SocialAuthController),
    Teacher: Object.assign(Teacher, Teacher),
    Student: Object.assign(Student, Student),
    LiveKitController: Object.assign(LiveKitController, LiveKitController),
}

export default V1