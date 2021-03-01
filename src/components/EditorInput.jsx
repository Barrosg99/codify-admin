import React, { useContext } from 'react';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python';
import 'codemirror/mode/coffeescript/coffeescript';
import 'codemirror/mode/php/php';
import 'codemirror/mode/ruby/ruby';

import { Controlled as ControlledEditor } from 'react-codemirror2';
import { LanguageContext } from '../contexts/LanguageContext';

export default function EditorInput(props) {
  const {
    value, onChange,
  } = props;

  const { language } = useContext(LanguageContext);

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
          tabSize: 2,
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
