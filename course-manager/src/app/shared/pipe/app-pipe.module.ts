import {NgModule} from "@angular/core";
import {ReplacePipe} from "./replace.pipe";
import {SafeImagePipe} from "./safe-image.pipe";

@NgModule({
  declarations: [
    ReplacePipe,
    SafeImagePipe,
  ],
  exports: [
    ReplacePipe,
    SafeImagePipe,
  ],
})
export class AppPipeModule {

}
