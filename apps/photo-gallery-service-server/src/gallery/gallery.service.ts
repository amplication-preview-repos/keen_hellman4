import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GalleryServiceBase } from "./base/gallery.service.base";

@Injectable()
export class GalleryService extends GalleryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
