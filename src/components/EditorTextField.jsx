import React from 'react';
import { useInput } from 'react-admin';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import CodeEditor from './Editor';

const useStyles = makeStyles(() => ({
  input: {
    width: '100%',
    marginBottom: '20px',
  },
}));

export default function EditorTextField(props) {
  const {
    input: { name, ...rest },
  } = useInput(props);

  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      label={props.label}
      InputProps={{
        inputComponent: CodeEditor,
      }}
      {...rest}
    />
  );
}
