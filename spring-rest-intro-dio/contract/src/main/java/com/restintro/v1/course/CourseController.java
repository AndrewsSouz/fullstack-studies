package com.restintro.v1.course;

import com.restintro.v1.course.facade.CourseControllerFacade;
import com.restintro.v1.course.model.CourseControllerDto;
import com.restintro.v1.course.model.CourseControllerResponse;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/v1/courses")
@CrossOrigin("*")
public class CourseController {

    private CourseControllerFacade courseFacade;

    @GetMapping
    public List<CourseControllerResponse> findAll() {
        return courseFacade.findAll();
    }

    @GetMapping("/{id}")
    public CourseControllerResponse findById(@PathVariable Long id) {
        return courseFacade.findById(id);
    }

    @PatchMapping
    public CourseControllerResponse update(@RequestBody CourseControllerDto course) {
        return courseFacade.update(course);
    }

    @PatchMapping("course-image/{id}")
    public void updateImage(@PathVariable("id") Long id,
                            @RequestParam("image") MultipartFile imageData) {
        courseFacade.updateImage(id, imageData);
    }


}
