import { Link, Outlet } from 'react-router-dom';
import { adminRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutes } from '@packages/shared/src/routes/shop';

export const App = () => {
    return (
        <div data-testid='App'>
            <h1>HOST</h1>
            <Link to={adminRoutes.main}>ABOUT</Link>
            <br />
            <Link to={adminRoutes.second}>SECOND ABOUT</Link>
            <br />
            <Link to={shopRoutes.shop}>SHOP</Link>
            <Outlet />
        </div>
    );
};
