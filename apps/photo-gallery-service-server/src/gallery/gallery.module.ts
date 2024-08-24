import { Module } from "@nestjs/common";
import { GalleryModuleBase } from "./base/gallery.module.base";
import { GalleryService } from "./gallery.service";
import { GalleryController } from "./gallery.controller";
import { GalleryResolver } from "./gallery.resolver";

@Module({
  imports: [GalleryModuleBase],
  controllers: [GalleryController],
  providers: [GalleryService, GalleryResolver],
  exports: [GalleryService],
})
export class GalleryModule {}
