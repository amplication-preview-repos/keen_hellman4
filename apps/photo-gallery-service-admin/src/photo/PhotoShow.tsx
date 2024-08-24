import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { GALLERY_TITLE_FIELD } from "../gallery/GalleryTitle";

export const PhotoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="aperture" source="aperture" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="file" source="file" />
        <ReferenceField label="Gallery" source="gallery.id" reference="Gallery">
          <TextField source={GALLERY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="iso" source="iso" />
        <TextField label="shutterSpeed" source="shutterSpeed" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
