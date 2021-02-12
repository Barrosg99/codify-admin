import React from 'react';
import {
  Create,
  maxLength,
  minLength,
  minValue,
  NumberInput,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

export default function TopicCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm
        redirect="show"
        warnWhenUnsavedChanges
      >
        <ReferenceInput
          source="chapterId"
          label="Capítulo"
          reference="chapters"
        >
          <SelectInput
            optionText="name"
            validate={[required()]}
          />
        </ReferenceInput>
        <TextInput
          source="name"
          label="Tópico"
          validate={[required(), minLength(5), maxLength(25)]}
        />
        <NumberInput
          source="order"
          label="Ordem de apresentação"
          validate={[required(), minValue(1)]}
        />
      </SimpleForm>
    </Create>
  );
}
