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
          toolbar={[[{ size: ['small', 'large', 'huge'] }, { color: ['white', 'red', 'yellow'] }], ['bold', 'underline']]}
          options={{
            theme: 'snow',
          }}
        />
      </SimpleForm>
    </Create>
  );
}
