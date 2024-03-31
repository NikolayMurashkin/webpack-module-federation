import { App } from '@/components/App/App';
import { About } from '@/pages';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
    {
        path: '/about',
        element: <App />,
        children: [
            {
                path: '/about/main',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: '/about/second',
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <div>SECOND</div>
                    </Suspense>
                ),
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
export default routes;
