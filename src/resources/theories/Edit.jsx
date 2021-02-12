import * as React from 'react';
import {
  Edit, ReferenceInput, required, SelectInput, SimpleForm, TextInput,
} from 'react-admin';

export default function TheoryEdit(props) {
  return (
    <Edit {...props}>
      <SimpleForm
        redirect="show"
        warnWhenUnsavedChanges
      >
        <ReferenceInput
          source="topicId"
          label="Tópico"
          reference="topics"

        >
          <SelectInput
            optionText="name"
            validate={[required()]}
          />
        </ReferenceInput>
        <TextInput
          source="youtubeUrl"
          label="Link do Youtube"
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
}
