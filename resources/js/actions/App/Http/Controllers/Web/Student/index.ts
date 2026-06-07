import DashboardController from './DashboardController'
import CourseController from './CourseController'
import EnrollmentController from './EnrollmentController'
import TokenController from './TokenController'
import PurchaseController from './PurchaseController'
import ResourceController from './ResourceController'
import RecordingController from './RecordingController'
import SkillController from './SkillController'
import NotificationController from './NotificationController'
const Student = {
    DashboardController: Object.assign(DashboardController, DashboardController),
CourseController: Object.assign(CourseController, CourseController),
EnrollmentController: Object.assign(EnrollmentController, EnrollmentController),
TokenController: Object.assign(TokenController, TokenController),
PurchaseController: Object.assign(PurchaseController, PurchaseController),
ResourceController: Object.assign(ResourceController, ResourceController),
RecordingController: Object.assign(RecordingController, RecordingController),
SkillController: Object.assign(SkillController, SkillController),
NotificationController: Object.assign(NotificationController, NotificationController),
}

export default Student