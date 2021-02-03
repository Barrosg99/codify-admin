/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import * as React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { authProvider } from './providers';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
	<Admin authProvider={authProvider} dataProvider={dataProvider}>
		<Resource name="users" list={ListGuesser} />
	</Admin>
);

export default App;
