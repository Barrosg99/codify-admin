import React from 'react';
import {
  DateField,
  NumberField,
  ReferenceField, Show, SimpleShowLayout, TextField,
} from 'react-admin';

export default function TopicShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="chapterId" label="Capítulo" reference="chapters">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="name" label="Tópico" />
        <NumberField source="order" label="Ordem de apresentação" />
        <DateField source="createdAt" label="Data de criação" />
        <DateField source="updatedAt" label="Data de alteração" />
      </SimpleShowLayout>
    </Show>
  );
}
