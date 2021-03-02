import React from 'react';
import { required } from 'react-admin';
import EditorTextField from './EditorTextField';

export default function CodeInput(props) {
  const { source, label, ...rest } = props;

  return (
    <EditorTextField
      source={source}
      label={label}
      validate={required()}
      {...rest}
    />
  );
}
