package com.restintro.service;

import com.restintro.entity.Course;
import com.restintro.repository.CourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
@AllArgsConstructor
public class CourseService {

    private CourseRepository courseRepository;

    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    public Course findById(Long id) {
        return courseRepository.findById(id)
                .orElse(Course.builder().build());
    }

    public Course save(Course course) {
        return courseRepository.save(course);
    }

    public Course update(Course course) {
        var courseToUpdate = findById(course.getId());
        course.setImage(courseToUpdate.getImage());
        return courseRepository.save(course);
    }

    public void updateImage(Long id, MultipartFile imageData) {
        var course = courseRepository.getReferenceById(id);
        try {
            course.setImage(imageData.getBytes());
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        courseRepository.save(course);
    }
}
