package com.restintro.v1.course.mapper;

import com.restintro.entity.Course;
import com.restintro.v1.course.model.CourseControllerDto;
import com.restintro.v1.course.model.CourseControllerResponse;

import java.util.Date;
import java.util.Objects;
import java.util.Optional;

public class CourseControllerMapper {

    public static Course mapToCourse(CourseControllerDto courseControllerDto) {
        return Course.builder()
                .id(courseControllerDto.getId())
                .name(courseControllerDto.getName())
                .code(courseControllerDto.getCode())
                .duration(courseControllerDto.getDuration())
                .description(courseControllerDto.getDescription())
                .price(courseControllerDto.getPrice())
                .rating(courseControllerDto.getRating())
                .release(courseControllerDto.getReleaseDate())
                .build();
    }

    public static CourseControllerResponse mapToCourseResponse(Course course) {
        return Optional.ofNullable(CourseControllerResponse.builder()
                        .id(course.getId())
                        .name(course.getName())
                        .code(course.getCode())
                        .duration(course.getDuration())
                        .description(course.getDescription())
                        .price(course.getPrice())
                        .rating(course.getRating())
                        .imageBlob(course.getImage())
                        .releaseDate(
                                Optional.ofNullable(course.getRelease())
                                        .map(Object::toString)
                                        .orElse(""))
                        .build())
                .orElse(CourseControllerResponse.builder().build());
    }
}
