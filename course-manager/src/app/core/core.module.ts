import {NgModule} from "@angular/core";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  declarations: [
    NavBarComponent,
    NotFoundComponent,
  ],
  exports: [
    NavBarComponent,
  ],
  imports: [
    RouterModule,
  ],
})
export class CoreModule {

}
