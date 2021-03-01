import React from 'react';
import {
  DateField, ReferenceField, Show, TextField, TabbedShowLayout, Tab, RichTextField,
} from 'react-admin';

import CodeShowField from '../../components/CodeShowField';

export default function ExerciseShow(props) {
  return (
    <Show {...props} title={`Exercício #${props.id}`}>
      <TabbedShowLayout>
        <Tab label="Identificação">
          <TextField source="id" />

          <ReferenceField source="topicId" label="Tópico" reference="topics">
            <TextField source="name" />
          </ReferenceField>

          <TextField source="title" label="Título" />
          <TextField source="language" label="Linguagem" />

          <DateField source="createdAt" label="Data de criação" locales="pt-BR" />
          <DateField source="updatedAt" label="Data de alteração" locales="pt-BR" />
        </Tab>

        <Tab label="enunciado">
          <RichTextField source="enunciated" label="Enunciado" />
        </Tab>

        <Tab label="Código inicial">
          <CodeShowField source="initialCode" />
        </Tab>

        <Tab label="Código de Testes">
          <CodeShowField source="tests" />
        </Tab>

        <Tab label="Solução">
          <CodeShowField source="solution" />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}
