import { Gallery as TGallery } from "../api/gallery/Gallery";

export const GALLERY_TITLE_FIELD = "name";

export const GalleryTitle = (record: TGallery): string => {
  return record.name?.toString() || String(record.id);
};
