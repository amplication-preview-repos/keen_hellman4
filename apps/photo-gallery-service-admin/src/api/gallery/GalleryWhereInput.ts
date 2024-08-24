import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PhotoListRelationFilter } from "../photo/PhotoListRelationFilter";

export type GalleryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  photos?: PhotoListRelationFilter;
};
