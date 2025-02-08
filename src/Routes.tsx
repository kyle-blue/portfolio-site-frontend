import { createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';


export enum Paths {
    LOGIN = "login",
    SIGN_UP = "sign-up",
    PROJECTS = "projects"
}

export const AppRouter = createBrowserRouter([
    {
      path: '/',
      element: <Root />
    },
])