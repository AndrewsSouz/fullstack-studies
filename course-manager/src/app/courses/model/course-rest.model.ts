export class CourseRestModel {
  id!: number;
  name!: string;
  imageBlob!: Blob;
  price?: number;
  code?: string;
  duration?: number;
  rating!: number;
  releaseDate!: string;
  description?: string;
}
