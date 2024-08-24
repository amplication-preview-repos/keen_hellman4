import { Photo } from "../photo/Photo";

export type Gallery = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  photos?: Array<Photo>;
  updatedAt: Date;
};
