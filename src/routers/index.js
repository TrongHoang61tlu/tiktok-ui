import Home from '~/pages/Home';
import Following from "~/pages/Following";
import { Component } from 'react';
import Profile from '~/pages/Profile';
import UpLoad from '~/pages/Upload';
import { HeaderOnly} from '~/components/Layout';
//Public routes
const publicRoutes = [
    {path: "/", component:Home},
    {path: "/following", component:Following},
    {path: "/profile", component: Profile},
    {path: "/upload", component: UpLoad, layout : HeaderOnly},
];

// Private Routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes}