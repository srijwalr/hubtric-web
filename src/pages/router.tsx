import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import Home from './home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path='/' element={<Home />} />
    </Fragment>
  )
);
