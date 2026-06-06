package com.englishapp.ui.course

import android.os.Bundle
import android.view.View
import androidx.fragment.app.viewModels
import androidx.lifecycle.lifecycleScope
import androidx.navigation.fragment.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import com.englishapp.databinding.FragmentCourseListBinding
import com.englishapp.ui.common.BaseFragment
import com.englishapp.ui.common.Adapters.CourseAdapter
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.coroutines.launch

@AndroidEntryPoint
class CourseListFragment : BaseFragment<CourseViewModel>(com.englishapp.R.layout.fragment_course_list) {

    override val viewModel: CourseViewModel by viewModels()
    private lateinit var binding: FragmentCourseListBinding

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding = FragmentCourseListBinding.bind(view)

        val adapter = CourseAdapter(emptyList()) { course ->
            findNavController().navigate(
                CourseListFragmentDirections.actionCourseListFragmentToCourseDetailFragment(course.id)
            )
        }
        binding.rvCourses.layoutManager = LinearLayoutManager(requireContext())
        binding.rvCourses.adapter = adapter

        viewModel.loadCourses()
        lifecycleScope.launch {
            viewModel.courses.collect { courses ->
                adapter.updateData(courses)
            }
        }
    }
}
