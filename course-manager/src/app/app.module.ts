import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {StarComponent} from "./star/star.component";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {CourseModule} from "./courses/course.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([
      {
        path: "", redirectTo: "courses", pathMatch: "full"
      },
      {
        path: "**", component: NotFoundComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
