import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { GalleryTitle } from "../gallery/GalleryTitle";

export const PhotoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="aperture" source="aperture" />
        <TextInput label="description" multiline source="description" />
        <div />
        <ReferenceInput source="gallery.id" reference="Gallery" label="Gallery">
          <SelectInput optionText={GalleryTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="iso" source="iso" />
        <TextInput label="shutterSpeed" source="shutterSpeed" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
