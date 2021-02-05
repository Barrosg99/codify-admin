import * as React from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  minLength,
  maxLength,
} from 'react-admin';

import { ColorInput } from 'react-admin-color-input';

export default function CoursesList(props) {
  return (
    <Create {...props}>
      <SimpleForm
        submitOnEnter
        redirect="show"
        warnWhenUnsavedChanges
      >
        <TextInput
          label="Título do curso"
          source="title"
          validate={[required(), minLength(2), maxLength(50)]}
        />
        <TextInput
          label="Descrição"
          source="description"
          validate={[required(), minLength(5)]}
        />
        <ColorInput label="Cor" source="color" />
        <TextInput
          label="Link da imagem"
          source="imageUrl"
          validate={[required()]}
        />
      </SimpleForm>
    </Create>
  );
}
