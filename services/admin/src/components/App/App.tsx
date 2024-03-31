import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <h1>ADMIN APP</h1>
            <Outlet />
        </div>
    );
};
