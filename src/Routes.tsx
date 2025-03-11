import { createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import NotFound from './pages/NotFound'

export enum Paths {
    ROOT = '/',
    NOT_FOUND = '*',
}

export const AppRouter = createBrowserRouter([
    {
        path: Paths.ROOT,
        element: <Root />,
    },
    {
        path: Paths.NOT_FOUND,
        element: <NotFound />,
    },
])
