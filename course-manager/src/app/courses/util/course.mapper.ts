import {CourseRestModel} from "../model/course-rest.model";
import {Builder} from "builder-pattern";
import {CourseModel} from "../model/course.model";

export class CourseMapper {

  private static readonly imageType = "data:image/png;base64, ";

  public static mapToCourse(courseResponse: CourseRestModel, image: string) {
    return Builder<CourseModel>()
      .id(courseResponse.id)
      .code(courseResponse.code)
      .description(courseResponse.description)
      .image(this.imageType.concat(image))
      .name(courseResponse.name)
      .duration(courseResponse.duration)
      .price(courseResponse.price)
      .rating(courseResponse.rating)
      .releaseDate(courseResponse.releaseDate)
      .build();
  }
}
