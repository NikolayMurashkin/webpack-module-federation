import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <div>
            <h1>SHOP APP</h1>
            <Outlet />
        </div>
    );
};
