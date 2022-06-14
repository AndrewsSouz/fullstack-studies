package com.restintro.v1.course.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseControllerResponse {

    private Long id;
    private String name;
    private Long price;
    private String code;
    private Long duration;
    private Double rating;
    private String releaseDate;
    private byte[] imageBlob;
    private String description;
}
