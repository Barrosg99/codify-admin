import React, { useContext } from 'react';
import RichTextInput from 'ra-input-rich-text';
import {
  Edit, ReferenceInput, required, SelectInput, SimpleForm, TextInput,
} from 'react-admin';

import CodeInput from '../../components/CodeInput';
import { LanguageContext } from '../../contexts/LanguageContext';

export default function ExerciseEdit(props) {
  const { language, setLanguage } = useContext(LanguageContext);

  const languages = [
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'PHP' },
    { name: 'C#' },
    { name: 'C++' },
    { name: 'Java' },
    { name: 'CoffeeScript' },
    { name: 'Powershell' },
    { name: 'Python' },
    { name: 'Ruby' },
  ];

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
          source="title"
          label="Título"
          validate={[required()]}
        />

        <RichTextInput
          source="enunciated"
          label="Enunciado"
          formClassName="question-input"
          toolbar={[[{ header: 1 }, { header: 2 }, { color: ['white', 'red', 'yellow'] }], ['bold', 'underline']]}
          helperText="Utilize as ferramentas disponibilizadas"
          validate={[required()]}
        />

        <SelectInput
          source="language"
          choices={languages}
          optionValue="name"
          label="Linguagem"
          value={language}
          onChange={(e) => setLanguage(e.target.value.toLowerCase())}
        />

        <CodeInput source="initialCode" label="Código inicial do exercício" />
        <CodeInput source="tests" label="Código de testes" />
        <CodeInput source="solution" label="Solução" />
      </SimpleForm>
    </Edit>
  );
}
