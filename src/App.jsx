import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter as Router } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { BiBookBookmark } from 'react-icons/bi';
import { authProvider, dataProvider } from './providers';

import GlobalStyle from './assets/globalStyle';

import {
  CreateCourse,
  EditCourse,
  ListCourse,
  ShowCourse,
} from './resources/courses';

const App = () => (
  <Router>
    <Reset />
    <GlobalStyle />
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource
        title="Cursos"
        name="courses"
        list={ListCourse}
        edit={EditCourse}
        show={ShowCourse}
        create={CreateCourse}
        icon={BiBookBookmark}
      />
    </Admin>
  </Router>
);

export default App;
