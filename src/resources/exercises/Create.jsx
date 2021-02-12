import React from 'react';
import {
  Create, ReferenceInput, required, SelectInput, SimpleForm, TextInput,
} from 'react-admin';

export default function ExerciseCreate(props) {
  return (
    <Create {...props}>
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
      </SimpleForm>
    </Create>
  );
}
