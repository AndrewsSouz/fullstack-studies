import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {CourseListComponent} from './courses/course-list.component';
import {StarComponent} from "./star/star.component";
import {ReplacePipe} from "./pipe/replace.pipe";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {CourseInfoComponent} from "./courses/course-info.component";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {SafeImagePipe} from "./pipe/safe-image.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    SafeImagePipe,
    NavBarComponent,
    NotFoundComponent,
    CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "courses", component: CourseListComponent
      },
      {
        path: "courses/info/:id", component: CourseInfoComponent
      },
      {
        path: "", redirectTo: "courses", pathMatch: "full"
      },
      {
        path: "**", component: NotFoundComponent
      }
    ]),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
