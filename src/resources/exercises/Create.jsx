/* eslint-disable no-unused-vars */
import React from 'react';
import RichTextInput from 'ra-input-rich-text';
import {
  Create, ReferenceInput, required, SelectInput, SimpleForm, TextInput,
} from 'react-admin';

export default function ExerciseCreate(props) {
  return (
    <Create {...props} title="Criar Exercício">
      <SimpleForm
        redirect="show"
        warnWhenUnsavedChanges
      >
        <ReferenceInput
          source="topicId"
          reference="topics"
          label="Tópico"
        >
          <SelectInput
            optionText="name"
            validate={[required()]}
          />
        </ReferenceInput>

        <TextInput
          source="title"
          label="Título"
          validate={[required()]}
        />

        <RichTextInput
          source="enunciated"
          label="Enunciado"
          formClassName="question-input"
          toolbar={[[{ header: 1 }, { header: 2 }, { color: ['white', 'red', 'yellow'] }], ['bold', 'underline']]}
          helperText="Utilize as ferramentas disponibilizadas"
          validate={[required()]}
        />

        <TextInput
          source="initialCode"
          label="Código inicial do exercício"
          multiline
          fullWidth
          helperText="Assegure-se de que sejam códigos compatíveis com a linguagem"
          validate={[required()]}
        />

        <TextInput
          source="testCode"
          label="Código de testes"
          multiline
          fullWidth
          helperText="Assegure-se de que existam 'describe' e 'it' para que os testes possam ser rodados"
          validate={[required()]}
        />

        <TextInput
          source="solution"
          label="Solução"
          multiline
          fullWidth
          helperText="Assegure-se de que sejam códigos compatíveis com a linguagem"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
}
