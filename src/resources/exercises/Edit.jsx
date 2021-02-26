import React from 'react';
import RichTextInput from 'ra-input-rich-text';
import {
  Edit, ReferenceInput, required, SelectInput, SimpleForm, TextInput,
} from 'react-admin';

export default function ExerciseEdit(props) {
  const languages = [
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'PHP' },
    { name: 'C#' },
    { name: 'C++' },
    { name: 'Java' },
    { name: 'CoffeeScript' },
    { name: 'Powershell' },
    { name: 'Python' },
    { name: 'Ruby' },
  ];

  return (
    <Edit {...props} title={`Exercício #${props.id}`}>
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

        <SelectInput source="language" choices={languages} optionValue="name" />

        <TextInput
          source="initialCode"
          label="Código inicial do exercício"
          multiline
          fullWidth
          helperText="Assegure-se de que sejam códigos compatíveis com a linguagem"
          validate={[required()]}
        />

        <TextInput
          source="tests"
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
    </Edit>
  );
}
