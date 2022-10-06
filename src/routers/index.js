import Home from '~/pages/Home';
import Following from "~/pages/Following";
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/Upload';
import { HeaderOnly} from '~/components/Layout';
import Search from '~/components/Layout/companents/Search';
import routerConfig from '~/components/config/routers';
//Public routes
const publicRoutes = [
    {path: routerConfig.home, component:Home},
    {path: routerConfig.following, component:Following},
    {path: routerConfig.profile, component: Profile},
    {path: routerConfig.upload, component: UpLoad, layout : HeaderOnly},
    {path: routerConfig.search, component: Search, layout: null},
];

// Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes}