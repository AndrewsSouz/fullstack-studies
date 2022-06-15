package com.restintro.v1.course.facade;

import com.restintro.service.CourseService;
import com.restintro.v1.course.mapper.CourseControllerMapper;
import com.restintro.v1.course.model.CourseControllerDto;
import com.restintro.v1.course.model.CourseControllerResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class CourseControllerFacade {

    private CourseService courseService;

    public List<CourseControllerResponse> findAll() {
        return courseService.findAll().stream()
                .map(CourseControllerMapper::mapToCourseResponse)
                .collect(Collectors.toList());
    }

    public CourseControllerResponse findById(Long id) {
        return CourseControllerMapper.mapToCourseResponse(courseService.findById(id));
    }

    public CourseControllerResponse save(CourseControllerDto courseControllerDto) {
        return CourseControllerMapper.mapToCourseResponse(
                courseService.save(CourseControllerMapper.mapToCourse(courseControllerDto)));
    }
    public CourseControllerResponse update(CourseControllerDto courseControllerDto) {
        return CourseControllerMapper.mapToCourseResponse(
                courseService.update(CourseControllerMapper.mapToCourse(courseControllerDto)));
    }

    public void updateImage(Long id, MultipartFile image) {
        courseService.updateImage(id, image);
    }

    public void delete(Long id) {
        courseService.delete(id);
    }
}
