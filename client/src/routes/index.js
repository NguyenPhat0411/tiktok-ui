import { HeaderOnly } from '~/components/layout';
import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follow', component: Follow },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const PrivateRoutes = [];

export { publicRoutes, PrivateRoutes };
