import { Home } from "./pages/Home";
import { Route } from 'react-location';
import { Planets } from "./pages/Planets";

export const routes: Route[] = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'planets',
                element: <Planets />
            }
        ]
    },

]