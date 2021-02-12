import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  required,
  minLength,
  maxLength,
  minValue,
} from 'react-admin';

export default function CreateChapters(props) {
  return (
    <Create {...props}>
      <SimpleForm
        redirect="show"
        warnWhenUnsavedChanges
      >
        <ReferenceInput label="Curso" source="courseId" reference="courses">
          <SelectInput
            optionText="title"
            validate={[required()]}
          />
        </ReferenceInput>
        <TextInput
          label="Capítulo"
          source="name"
          validate={[required(), minLength(5), maxLength(25)]}
        />
        <NumberInput
          label="Ordem de apresentação"
          source="order"
          validate={[required(), minValue(1)]}
        />
      </SimpleForm>
    </Create>
  );
}
