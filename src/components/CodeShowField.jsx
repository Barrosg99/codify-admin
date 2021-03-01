import React from 'react';
import styled from 'styled-components';

export default function CodeShowField({ record, source }) {
  return (
    <Container>
      <pre><span>{record[source]}</span></pre>
    </Container>
  );
}

const Container = styled.div`
	margin: 20px;

	span {
		font-family: Consolas,"courier new";
		color: gray;
		padding: 2px;
	}
`;
