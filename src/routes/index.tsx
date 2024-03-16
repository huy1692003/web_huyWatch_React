import { type } from 'os';
import Cart from '../pages/client/cart';
import Home from '../pages/client/home';

type Route = {
    path: string;
    component: any;
};
const publicRoutes: Route[] = [
    { path: '/', component: Home },
    { path: 'cart', component: Cart },
];
export { publicRoutes };
