import * as React from 'react';
import {
  Datagrid, DateField, EditButton, List, ReferenceField, ShowButton, TextField, UrlField,
} from 'react-admin';

export default function TheoriesList(props) {
  return (
    <List {...props} title="Teorias">
      <Datagrid rowClick="edit" title="Vídeos de teoria dos tópicos">
        <TextField source="id" />
        <ReferenceField source="topicId" label="Tópico" reference="topics">
          <TextField source="name" />
        </ReferenceField>
        <UrlField source="youtubeUrl" label="Link do Youtube" />
        <DateField source="createdAt" label="Data de criação" />
        <DateField source="updatedAt" label="Data de alteração" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
