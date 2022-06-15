import {NgModule} from "@angular/core";
import {CourseListComponent} from "./course-list.component";
import {CourseInfoComponent} from "./course-info.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ReplacePipe} from "../pipe/replace.pipe";
import {SafeImagePipe} from "../pipe/safe-image.pipe";
import {CommonModule} from "@angular/common";
import {StarComponent} from "../star/star.component";
import {CourseService} from "./course.service";

@NgModule({
  declarations: [
    ReplacePipe,
    SafeImagePipe,
    CourseListComponent,
    CourseInfoComponent,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "courses", component: CourseListComponent
      },
      {
        path: "courses/info/:id", component: CourseInfoComponent
      },
      {
        path: "courses/info", component: CourseInfoComponent
      }
    ]),
  ],
})
export class CourseModule {
}
