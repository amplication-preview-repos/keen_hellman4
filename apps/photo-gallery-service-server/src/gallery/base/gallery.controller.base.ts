/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GalleryService } from "../gallery.service";
import { GalleryCreateInput } from "./GalleryCreateInput";
import { Gallery } from "./Gallery";
import { GalleryFindManyArgs } from "./GalleryFindManyArgs";
import { GalleryWhereUniqueInput } from "./GalleryWhereUniqueInput";
import { GalleryUpdateInput } from "./GalleryUpdateInput";
import { PhotoFindManyArgs } from "../../photo/base/PhotoFindManyArgs";
import { Photo } from "../../photo/base/Photo";
import { PhotoWhereUniqueInput } from "../../photo/base/PhotoWhereUniqueInput";

export class GalleryControllerBase {
  constructor(protected readonly service: GalleryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Gallery })
  async createGallery(
    @common.Body() data: GalleryCreateInput
  ): Promise<Gallery> {
    return await this.service.createGallery({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Gallery] })
  @ApiNestedQuery(GalleryFindManyArgs)
  async galleries(@common.Req() request: Request): Promise<Gallery[]> {
    const args = plainToClass(GalleryFindManyArgs, request.query);
    return this.service.galleries({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Gallery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async gallery(
    @common.Param() params: GalleryWhereUniqueInput
  ): Promise<Gallery | null> {
    const result = await this.service.gallery({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Gallery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateGallery(
    @common.Param() params: GalleryWhereUniqueInput,
    @common.Body() data: GalleryUpdateInput
  ): Promise<Gallery | null> {
    try {
      return await this.service.updateGallery({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Gallery })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteGallery(
    @common.Param() params: GalleryWhereUniqueInput
  ): Promise<Gallery | null> {
    try {
      return await this.service.deleteGallery({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/photos")
  @ApiNestedQuery(PhotoFindManyArgs)
  async findPhotos(
    @common.Req() request: Request,
    @common.Param() params: GalleryWhereUniqueInput
  ): Promise<Photo[]> {
    const query = plainToClass(PhotoFindManyArgs, request.query);
    const results = await this.service.findPhotos(params.id, {
      ...query,
      select: {
        aperture: true,
        createdAt: true,
        description: true,
        file: true,

        gallery: {
          select: {
            id: true,
          },
        },

        id: true,
        iso: true,
        shutterSpeed: true,
        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/photos")
  async connectPhotos(
    @common.Param() params: GalleryWhereUniqueInput,
    @common.Body() body: PhotoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      photos: {
        connect: body,
      },
    };
    await this.service.updateGallery({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/photos")
  async updatePhotos(
    @common.Param() params: GalleryWhereUniqueInput,
    @common.Body() body: PhotoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      photos: {
        set: body,
      },
    };
    await this.service.updateGallery({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/photos")
  async disconnectPhotos(
    @common.Param() params: GalleryWhereUniqueInput,
    @common.Body() body: PhotoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      photos: {
        disconnect: body,
      },
    };
    await this.service.updateGallery({
      where: params,
      data,
      select: { id: true },
    });
  }
}