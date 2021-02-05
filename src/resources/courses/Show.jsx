import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  ShowButton,
  DateField,
} from 'react-admin';

import { ColorField } from 'react-admin-color-input';

export default function CoursesList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit" title="Cursos cadastrados">
        <TextField source="id" />
        <ImageField label="Logo" src="imageUrl" />
        <TextField label="Título" source="title" />
        <TextField label="Descrição" source="description" />
        <ColorField source="color" />
        <DateField source="createdAt" showTime={false} locales="pt-BR" />
        <DateField source="updatedAt" showTime={false} locales="pt-BR" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
