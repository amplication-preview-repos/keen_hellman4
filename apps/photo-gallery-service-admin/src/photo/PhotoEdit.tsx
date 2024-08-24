import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { GalleryTitle } from "../gallery/GalleryTitle";

export const PhotoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
