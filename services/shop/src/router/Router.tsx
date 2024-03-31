import { App } from '@/components/App/App';
import { Shop } from '@/pages';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/shop',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Shop />
                    </Suspense>
                ),
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
export default routes;
