import Home from '~/pages/Home';
import Following from "~/pages/Following";
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/Upload';
import Live from '~/pages/Live';
import { HeaderOnly} from '~/layouts';
import Search from '~/layouts/companents/Search';
import config from '~/config';
//Public routes
const publicRoutes = [
    {path: config.router.home, component:Home},
    {path: config.router.following, component:Following},
    {path: config.router.profile, component: Profile},
    {path: config.router.live, component:Live},
    {path: config.router.upload, component: UpLoad, layout : HeaderOnly},
    {path: config.router.search, component: Search, layout: null},
];

// Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes}