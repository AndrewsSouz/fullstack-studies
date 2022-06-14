package com.restintro.v1.course.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseControllerDto {

    private Long id;

    @NotEmpty(message = "Name must not be empty")
    private String name;

    private Long price;

    @NotEmpty(message = "Code is required")
    private String code;

    private Long duration;

    private Double rating;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date releaseDate;

    private String description;
}
