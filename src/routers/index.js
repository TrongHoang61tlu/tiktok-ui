import Home from '~/pages/Home';
import Following from "~/pages/Following";
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/Upload';
import { HeaderOnly} from '~/components/Layout';
import Search from '~/components/Layout/companents/Search';
//Public routes
const publicRoutes = [
    {path: "/", component:Home},
    {path: "/following", component:Following},
    {path: "/@:nickname", component: Profile},
    {path: "/upload", component: UpLoad, layout : HeaderOnly},
    {path: "/search", component: Search, layout: null},
];

// Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes}