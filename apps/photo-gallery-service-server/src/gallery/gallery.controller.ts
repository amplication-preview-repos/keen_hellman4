import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GalleryService } from "./gallery.service";
import { GalleryControllerBase } from "./base/gallery.controller.base";

@swagger.ApiTags("galleries")
@common.Controller("galleries")
export class GalleryController extends GalleryControllerBase {
  constructor(protected readonly service: GalleryService) {
    super(service);
  }
}
