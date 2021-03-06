import React from 'react';
import {
  Datagrid, DateField, EditButton, List, ReferenceField, ShowButton, TextField,
} from 'react-admin';

export default function ExercisesList(props) {
  return (
    <List {...props} title="Exercícios">
      <Datagrid rowClick="edit" title="Exercícios sobre os tópicos">
        <TextField source="id" />

        <ReferenceField source="topicId" reference="topics" label="Tópico">
          <TextField source="name" />
        </ReferenceField>

        <TextField source="title" label="Título" />

        <DateField source="createdAt" label="Data de criação" locales="pt-BR" />
        <DateField source="updatedAt" label="Data de alteração" locales="pt-BR" />

        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
