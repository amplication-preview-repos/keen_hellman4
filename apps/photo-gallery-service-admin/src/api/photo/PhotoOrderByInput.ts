import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  aperture?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  file?: SortOrder;
  galleryId?: SortOrder;
  id?: SortOrder;
  iso?: SortOrder;
  shutterSpeed?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
