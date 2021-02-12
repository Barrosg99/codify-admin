import * as React from 'react';
import {
  DateField, Show, SimpleShowLayout, UrlField, TextField, ReferenceField,
} from 'react-admin';

export default function TheoriesShow(props) {
  return (
    <Show {...props} title={`Teoria #${props.id}`}>
      <SimpleShowLayout>
        <ReferenceField source="topicId" label="Tópico" reference="topics">
          <TextField source="name" />
        </ReferenceField>
        <UrlField source="youtubeUrl" label="Link do Youtube" />
        <DateField source="createdAt" label="Data de criação" />
        <DateField source="updatedAt" label="Data de alteração" />
      </SimpleShowLayout>
    </Show>
  );
}
