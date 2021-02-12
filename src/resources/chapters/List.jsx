import * as React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  EditButton,
  ShowButton,
  DateField,
} from 'react-admin';

export default function ChaptersList(props) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit" title="Ementa dos cursos cadastrados">
        <TextField source="id" />
        <ReferenceField label="Curso" link="show" source="courseId" reference="courses">
          <TextField source="title" />
        </ReferenceField>
        <TextField source="name" label="Capítulo" />
        <NumberField label="Ordem de apresentação" source="order" />
        <NumberField label="Quantidade de tópicos" source="topicsQuantity" />
        <NumberField label="Quantidade de exercícios" source="exercisesQuantity" />
        <DateField label="Data de criação" source="createdAt" />
        <DateField label="Data de alteração" source="updatedAt" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
