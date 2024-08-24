import * as graphql from "@nestjs/graphql";
import { GalleryResolverBase } from "./base/gallery.resolver.base";
import { Gallery } from "./base/Gallery";
import { GalleryService } from "./gallery.service";

@graphql.Resolver(() => Gallery)
export class GalleryResolver extends GalleryResolverBase {
  constructor(protected readonly service: GalleryService) {
    super(service);
  }
}
