import { InputJsonValue } from "../../types";
import { GalleryWhereUniqueInput } from "../gallery/GalleryWhereUniqueInput";

export type PhotoCreateInput = {
  aperture?: string | null;
  description?: string | null;
  file?: InputJsonValue;
  gallery?: GalleryWhereUniqueInput | null;
  iso?: number | null;
  shutterSpeed?: string | null;
  title?: string | null;
};
