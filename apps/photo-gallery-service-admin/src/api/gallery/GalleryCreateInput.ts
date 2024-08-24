import { PhotoCreateNestedManyWithoutGalleriesInput } from "./PhotoCreateNestedManyWithoutGalleriesInput";

export type GalleryCreateInput = {
  description?: string | null;
  name?: string | null;
  photos?: PhotoCreateNestedManyWithoutGalleriesInput;
};
