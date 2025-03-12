import { createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import NotFound from './pages/NotFound'
import InProgress from './pages/InProgress'

export enum Paths {
    ROOT = '/',
    IN_PROGRESS = 'in-progress',
    NOT_FOUND = '*',
}

export const AppRouter = createBrowserRouter([
    {
        path: Paths.ROOT,
        element: <Root />,
    },
    {
        path: Paths.IN_PROGRESS,
        element: <InProgress />,
    },
    {
        path: Paths.NOT_FOUND,
        element: <NotFound />,
    },
])
