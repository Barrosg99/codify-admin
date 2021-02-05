import * as React from 'react';
import {
  Show,
  SimpleShowLayout,
  TextField,
  ImageField,
  DateField,
} from 'react-admin';

import { ColorField } from 'react-admin-color-input';

export default function CoursesShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ImageField label="Logo do curso" source="imageUrl" src="imageUrl" />
        <TextField label="Título" source="title" />
        <TextField label="Descrição" source="description" />
        <ColorField source="color" />
        <DateField label="Data de criação" source="createdAt" showTime={false} locales="pt-BR" />
        <DateField label="Data de alteração" source="updatedAt" showTime={false} locales="pt-BR" />
      </SimpleShowLayout>
    </Show>
  );
}
