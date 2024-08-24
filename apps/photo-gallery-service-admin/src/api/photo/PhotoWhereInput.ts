import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { GalleryWhereUniqueInput } from "../gallery/GalleryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PhotoWhereInput = {
  aperture?: StringNullableFilter;
  description?: StringNullableFilter;
  file?: JsonFilter;
  gallery?: GalleryWhereUniqueInput;
  id?: StringFilter;
  iso?: IntNullableFilter;
  shutterSpeed?: StringNullableFilter;
  title?: StringNullableFilter;
};
