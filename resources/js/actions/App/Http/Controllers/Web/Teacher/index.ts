import DashboardController from './DashboardController'
import TokenTypeController from './TokenTypeController'
import TokenController from './TokenController'
import CourseController from './CourseController'
import EnrollmentController from './EnrollmentController'
import ResourceController from './ResourceController'
import RecordingController from './RecordingController'
import SkillController from './SkillController'
import StudentController from './StudentController'
import TeacherNoteController from './TeacherNoteController'
import NotificationController from './NotificationController'
const Teacher = {
    DashboardController: Object.assign(DashboardController, DashboardController),
TokenTypeController: Object.assign(TokenTypeController, TokenTypeController),
TokenController: Object.assign(TokenController, TokenController),
CourseController: Object.assign(CourseController, CourseController),
EnrollmentController: Object.assign(EnrollmentController, EnrollmentController),
ResourceController: Object.assign(ResourceController, ResourceController),
RecordingController: Object.assign(RecordingController, RecordingController),
SkillController: Object.assign(SkillController, SkillController),
StudentController: Object.assign(StudentController, StudentController),
TeacherNoteController: Object.assign(TeacherNoteController, TeacherNoteController),
NotificationController: Object.assign(NotificationController, NotificationController),
}

export default Teacher