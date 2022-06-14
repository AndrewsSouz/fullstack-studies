import {Injectable} from "@angular/core";
import {CourseModel} from "./model/course.model";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {CourseRestModel} from "./model/course-rest.model";
import {CourseMapper} from "./util/course.mapper";

@Injectable({
  providedIn: "root"
})
export class CourseService {

  private readonly host = "http://localhost:8080";
  private readonly path = "/v1/courses";
  private readonly imagePath = "/course-image/";

  constructor(private httpClient: HttpClient) {
  }

  public retrieveAllCourses(): Observable<CourseModel[]> {
    console.log("retrieveALl() service");
    return this.httpClient.get<CourseRestModel[]>(
      `${this.host}${this.path}`
    ).pipe(
      map(courseResponseList =>
        courseResponseList.map(courseRest => {
          const image: string = String(courseRest.imageBlob);
          return CourseMapper.mapToCourse(courseRest, image);
        })
      )
    );
  }

  public retrieveById(id: number): Observable<CourseModel> {
    console.log("retrieveById() service");
    return this.httpClient.get<CourseModel>(
      `${this.host}${this.path}/${id}`
    );
  }

  public saveOrUpdate(course: CourseModel):Observable<CourseModel> {
    if (course.id) {
      return this.update(course);
    } else {
      return this.save(course);
    }
  }

  public save(course: CourseModel):Observable<CourseModel> {
    console.log("save() service");
    return this.httpClient.post<CourseModel>(
      `${this.host}${this.path}`,
      course
    )
  }

  public update(course: CourseModel):Observable<CourseModel> {
    console.log("update() service");
    return this.httpClient.patch<CourseModel>(
      `${this.host}${this.path}`,
      course
    )
  }

  public updateImage(id: number, image: File) {
    console.log("updateImage() service");

    const formData = new FormData();
    formData.append("image", image);

    this.httpClient.patch(
      this.host
        .concat(this.path)
        .concat(this.imagePath)
        .concat(String(id)),
      formData
    ).subscribe({
      next: () => console.log('Image updated'),
      error: err => console.log(err)
    })
  }

  public delete(id: number):Observable<any> {
    console.log("delete() service");
    return this.httpClient.delete(
      `${this.host}${this.path}/${id}`
    );
  }

}
