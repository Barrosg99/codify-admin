import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter as Router } from 'react-router-dom';
import { Reset } from 'styled-reset';
import { BiBookBookmark, BiDetail } from 'react-icons/bi';
import { authProvider, dataProvider } from './providers';

import GlobalStyle from './assets/globalStyle';

import {
  CreateCourse,
  EditCourse,
  ListCourse,
  ShowCourse,
} from './resources/courses';

import {
  EditSummaries,
  ListSummaries,
  ShowSummaries,
  CreateSummaries,
} from './resources/summaries';

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
      <Resource
        title="Ementa"
        name="summaries"
        list={ListSummaries}
        show={ShowSummaries}
        edit={EditSummaries}
        create={CreateSummaries}
        icon={BiDetail}
      />
    </Admin>
  </Router>
);

export default App;
