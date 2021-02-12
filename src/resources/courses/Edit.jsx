import * as React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  required,
  minLength,
  maxLength,
} from 'react-admin';
import { ColorInput } from 'react-admin-color-input';

export default function CoursesList(props) {
  return (
    <Edit {...props} title={`Curso #${props.id}`}>
      <SimpleForm
        submitOnEnter
        redirect="show"
        warnWhenUnsavedChanges
      >
        <TextInput
          label="Título do curso"
          source="title"
          validate={[required(), minLength(2), maxLength(20)]}
        />
        <TextInput
          label="Descrição"
          source="description"
          validate={[required(), minLength(5), maxLength(50)]}
        />
        <ColorInput label="Cor" source="color" />
        <TextInput
          label="Link da imagem"
          source="imageUrl"
          validate={[required()]}
        />
      </SimpleForm>
    </Edit>
  );
}
