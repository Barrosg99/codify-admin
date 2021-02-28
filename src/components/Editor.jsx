import React from 'react';
import styled from 'styled-components';
import EditorInput from './EditorInput';

export default function CodeEditor(props) {
  const { inputRef, ...other } = props;

  return (
    <Container>
      <EditorInput
        language="javascript"
        {...other}
      />
    </Container>
  );
}

const Container = styled.div`
	display: flex;
	width: 100%;
`;
