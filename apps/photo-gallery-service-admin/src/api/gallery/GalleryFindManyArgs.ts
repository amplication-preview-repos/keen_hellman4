import { GalleryWhereInput } from "./GalleryWhereInput";
import { GalleryOrderByInput } from "./GalleryOrderByInput";

export type GalleryFindManyArgs = {
  where?: GalleryWhereInput;
  orderBy?: Array<GalleryOrderByInput>;
  skip?: number;
  take?: number;
};
