import React from 'react';
import {
  DateField, ReferenceField, Show, SimpleShowLayout, TextField,
} from 'react-admin';

export default function ExerciseShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField source="topicId" label="Tópico" reference="topics">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="description" label="Descrição" />
        <DateField source="createdAt" label="Data de criação" />
        <DateField source="updatedAt" label="Data de alteração" />
      </SimpleShowLayout>
    </Show>
  );
}
