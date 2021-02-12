import * as React from 'react';
import {
  Show,
  TextField,
  ReferenceField,
  NumberField,
  DateField,
  SimpleShowLayout,
} from 'react-admin';

export default function ChaptersShow(props) {
  return (
    <Show {...props} title={`Capítulo #${props.id}`}>
      <SimpleShowLayout>
        <TextField source="id" />
        <ReferenceField label="Curso" source="courseId" link="show" reference="courses">
          <TextField source="title" />
        </ReferenceField>
        <TextField label="Capítulo" source="name" />
        <NumberField label="Ordem de apresentação" source="order" />
        <NumberField label="Quantidade de tópicos" source="topicsQuantity" />
        <NumberField label="Quantidade de exercícios" source="exercisesQuantity" />
        <DateField label="Data de criação" source="createdAt" />
        <DateField label="Data de alteração" source="updatedAt" />
      </SimpleShowLayout>
    </Show>
  );
}
