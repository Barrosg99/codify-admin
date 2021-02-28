import React from 'react';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

export default function EditorInput(props) {
  const {
    language, value, onChange,
  } = props;

  const handleChange = (editor, data, inputValue) => {
    onChange(inputValue);
  };

  return (
    <Container inputValue={value}>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'dracula',
        }}
      />
    </Container>
  );
}

const Container = styled.div`
	flex-grow: 1;
	margin-top: ${({ inputValue }) => (inputValue ? '0' : '30px')};
	transition: all 80ms linear;

	span {
		font-weight: bold;
	}
`;
