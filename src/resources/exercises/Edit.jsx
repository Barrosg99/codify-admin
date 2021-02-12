import React from 'react';
import {
  Edit, ReferenceInput, required, SelectInput, SimpleForm, TextInput,
} from 'react-admin';

export default function ExerciseEdit(props) {
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
          source="description"
          label="Descrição"
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
}
