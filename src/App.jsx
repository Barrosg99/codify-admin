import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter as Router } from 'react-router-dom';
import { Reset } from 'styled-reset';
import {
  BiBookBookmark, BiDetail, BiListUl, BiSlideshow,
} from 'react-icons/bi';
import { authProvider, dataProvider } from './providers';

import GlobalStyle from './assets/globalStyle';

import {
  CreateCourse,
  EditCourse,
  ListCourse,
  ShowCourse,
} from './resources/courses';

import {
  EditChapters,
  ListChapters,
  ShowChapters,
  CreateChapters,
} from './resources/chapters';

import {
  CreateTopic, EditTopic, ListTopic, ShowTopic,
} from './resources/topics';

import {
  TheoriesCreate, TheoriesEdit, TheoriesList, TheoriesShow,
} from './resources/theories';

import {
  ExerciseShow, ExercisesList, ExerciseEdit, ExerciseCreate,
} from './resources/exercises';

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
        title="Capítulos"
        name="chapters"
        list={ListChapters}
        show={ShowChapters}
        edit={EditChapters}
        create={CreateChapters}
        icon={BiDetail}
      />
      <Resource
        title="Tópicos"
        name="topics"
        list={ListTopic}
        show={ShowTopic}
        edit={EditTopic}
        create={CreateTopic}
        icon={BiListUl}
      />
      <Resource
        title="Teorias"
        name="theories"
        list={TheoriesList}
        show={TheoriesShow}
        edit={TheoriesEdit}
        create={TheoriesCreate}
        icon={BiSlideshow}
      />
      <Resource
        title="Exercícios"
        name="exercises"
        list={ExercisesList}
        show={ExerciseShow}
        edit={ExerciseEdit}
        create={ExerciseCreate}
      />
    </Admin>
  </Router>
);

export default App;
