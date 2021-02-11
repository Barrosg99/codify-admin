import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  required,
  minLength,
  maxLength,
  minValue,
} from 'react-admin';

const transform = (data) => ({
  ...data,
  topicsQuantity: data.topics.length,
});

export default function CreateSummaries(props) {
  return (
    <Create {...props} transform={transform}>
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
        <NumberInput
          label="Quantidade de exercícios"
          source="exercisesQuantity"
          validate={[required(), minValue(1)]}
        />

        <ArrayInput
          label="Tópicos"
          source="topics"
          validate={[required()]}
        >
          <SimpleFormIterator>
            <TextInput
              label="Titulo do tópico"
              source="name"
              validate={[required(), minLength(5), maxLength(25)]}
            />
            <NumberInput
              label="Ordem de aprensentação"
              source="order"
              validate={[required(), minValue(1)]}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
}
