import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CourseModel} from "./model/course.model";
import {CourseService} from "./course.service";

@Component({
  templateUrl: "./course-info.component.html"
})
export class CourseInfoComponent implements OnInit {

  course!: CourseModel;
  courseImage!: File;
  filename?: string;

  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {
    const courseId = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.courseService.retrieveById(courseId).subscribe({
      next: course => this.course = course,
      error: err => console.log(err)
    });
  }

  save(): void {
    this.courseService.save(this.course);
    if (this.courseImage) {
      this.filename = this.courseImage.name;
      this.courseService.updateImage(this.course.id,this.courseImage);
    }
  }

  onFileSelected(event: any) {
    this.courseImage = event.target.files[0];
  }

}
