import { JsonValue } from "type-fest";
import { Gallery } from "../gallery/Gallery";

export type Photo = {
  aperture: string | null;
  createdAt: Date;
  description: string | null;
  file: JsonValue;
  gallery?: Gallery | null;
  id: string;
  iso: number | null;
  shutterSpeed: string | null;
  title: string | null;
  updatedAt: Date;
};
