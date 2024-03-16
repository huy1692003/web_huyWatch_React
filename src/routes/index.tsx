import { type } from 'os';
import Cart from '../pages/client/Cart';
import Home from '../pages/client/Home';

type Route = {
    path: string;
    component: any;
};
const publicRoutes: Route[] = [
    { path: '/', component: Home },
    { path: 'cart', component: Cart },
];
export { publicRoutes };
