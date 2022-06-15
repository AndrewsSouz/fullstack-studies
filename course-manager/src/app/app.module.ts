import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {StarComponent} from "./shared/component/star/star.component";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {NavBarComponent} from "./core/nav-bar/nav-bar.component";
import {CourseModule} from "./courses/course.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
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
