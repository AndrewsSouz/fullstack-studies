import {Component, OnInit} from "@angular/core";
import {Builder} from "builder-pattern";
import {CourseModel} from "./model/course.model"
import {CourseService} from "./course.service";

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {

  filteredCourses: CourseModel[] = [];
  _courses: CourseModel[] = [];
  _filterBy: string = "";

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.retrieveAllCourses();
  }

  retrieveAllCourses(): void {
    this.courseService.retrieveAllCourses()
      .subscribe({
        next: courses => {
          this._courses = courses;
          this.filteredCourses = this._courses;
        },
        error: err => console.log(err)
      })
  }

  deleteCourse(id:number): void {
    this.courseService.delete(id).subscribe({
      next: () => {
        console.log(`Course id ${id}, deleted`);
        this.retrieveAllCourses();
      },
      error: err => console.log(err)
    });
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses
      .filter(course => course.name!.toLowerCase()
        .indexOf(this._filterBy.toLowerCase()) >= 0);
  }

  get filter() {
    return this._filterBy;
  }

}
