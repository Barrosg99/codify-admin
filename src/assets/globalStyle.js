import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button, input, textarea, select {
    outline: none;
    border: none;
    background: none;
    color: inherit;
    padding: 0px;
  }

	.question-input .ql-editor {
		background-color: #2E2E2E;
		color: white;
	}
`;
