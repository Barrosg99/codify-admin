import React from 'react';
import {
  DateField, ReferenceField, Show, TextField, TabbedShowLayout, Tab,
} from 'react-admin';

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
          <TextField source="enunciated" label="Enunciado" />
        </Tab>

        <Tab label="Código inicial">
          <TextField source="initialCode" label="Código inicial" />
        </Tab>

        <Tab label="Código de Testes">
          <TextField source="tests" label="Código de testes" />
        </Tab>

        <Tab label="Solução">
          <TextField source="feedback" label="Solução" />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}
