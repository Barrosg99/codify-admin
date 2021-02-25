/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Create, ReferenceInput, required, SelectInput, SimpleForm, TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

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
          source="description"
          label="Descrição"
          validate={[required()]}
        />

        <RichTextInput
          source="enunciated"
          label="Enunciado"
          formClassName="question-input"
          toolbar={[[{ size: ['small', 'large', 'huge'] }, { color: ['white', 'red', 'yellow'] }], ['bold', 'underline']]}
          options={{
            theme: 'snow',
          }}
        />

        <RichTextInput
          source="initialCode"
          label="Código inicial do exercício"
          toolbar={['code-block']}
        />

        <RichTextInput
          source="testCode"
          label="Código de testes"
          toolbar={['code-block']}
        />

        <RichTextInput
          source="solution"
          label="Solução"
          toolbar={['code-block']}
        />
      </SimpleForm>
    </Create>
  );
}
