import * as React from 'react';
import {
  Show,
  TabbedShowLayout,
  TextField,
  ReferenceField,
  NumberField,
  ArrayField,
  Datagrid,
  DateField,
  Tab,
} from 'react-admin';

export default function SummariesShow(props) {
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Capítulo">
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
        </Tab>
        <Tab label="Tópicos">
          <ArrayField source="topics">
            <Datagrid>
              <TextField source="id" />
              <TextField label="Tópico" source="name" />
              <NumberField label="Ordem de apresentação" source="order" />
              <DateField label="Data de criação" source="createdAt" />
              <DateField label="Data de alteração" source="updatedAt" />
            </Datagrid>
          </ArrayField>
        </Tab>

      </TabbedShowLayout>
    </Show>
  );
}
