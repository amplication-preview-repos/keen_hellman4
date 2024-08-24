import { PhotoUpdateManyWithoutGalleriesInput } from "./PhotoUpdateManyWithoutGalleriesInput";

export type GalleryUpdateInput = {
  description?: string | null;
  name?: string | null;
  photos?: PhotoUpdateManyWithoutGalleriesInput;
};
