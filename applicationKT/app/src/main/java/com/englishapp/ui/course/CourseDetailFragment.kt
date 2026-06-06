package com.englishapp.ui.course

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import com.englishapp.R
import com.englishapp.databinding.FragmentCourseDetailBinding
import com.englishapp.ui.common.BaseFragment
import com.englishapp.ui.enrollment.EnrollmentViewModel
import dagger.hilt.android.AndroidEntryPoint

@AndroidEntryPoint
class CourseDetailFragment : BaseFragment<CourseViewModel>(R.layout.fragment_course_detail) {

    override val viewModel: CourseViewModel by viewModels()
    private val enrollmentViewModel: EnrollmentViewModel by viewModels()
    private lateinit var binding: FragmentCourseDetailBinding
    private var courseId: Long = -1

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        courseId = arguments?.getLong("courseId", -1) ?: -1
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentCourseDetailBinding.bind(view)

        viewModel.loadCourses()
        // For simplicity, we just load all courses and filter; better to have a getCourseDetail repo call
        // But we'll assume we already navigated with id, so we can use a separate load detail in viewModel if needed.
        // Here we'll just show static; in real app, add getCourseDetail API.
        // For now, placeholder.
        binding.btnEnroll.setOnClickListener {
            enrollmentViewModel.enroll(courseId)
        }
    }
}
