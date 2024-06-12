import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './home';
import Layout from './layout';
import { routes } from '@/lib/constants';
import About from './about';
import Capabilities from './capabilities';
import Industries from './industries';
import Contact from './contact';
import ErrorPage from './error';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={routes.home()} element={<Home />} />
      <Route path={routes.aboutUs()} element={<About />} />
      <Route path={routes.capabilities()} element={<Capabilities />} />
      <Route path={routes.industries()} element={<Industries />} />
      <Route path={routes.contactUs()} element={<Contact />} />
      <Route path={routes.error()} element={<ErrorPage />} />
    </Route>
  )
);
