import * as React from 'react';
import {
  Datagrid, DateField, EditButton, List, NumberField, ReferenceField, ShowButton, TextField,
} from 'react-admin';

export default function TopicsList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="chapterId" label="Capítulo" reference="chapters">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="name" label="Tópico" />
        <NumberField source="order" label="Ordem de apresentação" />
        <DateField source="createdAt" label="Data de criação" />
        <DateField source="updatedAt" label="Data de alteração" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
