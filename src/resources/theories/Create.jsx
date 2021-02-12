import * as React from 'react';
import {
  Create,
  ReferenceInput, required, SelectInput, SimpleForm, TextInput,
} from 'react-admin';

export default function TheoryCreate(props) {
  return (
    <Create {...props} title="Criar Teoria">
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
    </Create>
  );
}
