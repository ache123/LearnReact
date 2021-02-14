import About, { AboutHistory, AboutCulture, AboutContact, JoinUs } from "../pages/About";
import Detail from "../pages/Detail";
import Detail2 from "../pages/Detail2";
import Detail3 from "../pages/Detail3";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import User from "../pages/User";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/about",
    component: About,
    routes: [
      {
        path: "/about",
        exact: true,
        component: AboutHistory
      },
      {
        path: "/about/culture",
        component: AboutCulture
      },
      {
        path: "/about/contact",
        component: AboutContact
      },
      {
        path: "/about/join",
        component: JoinUs
      }
    ]
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/product",
    component: Product
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/detail2",
    component: Detail2
  },
  {
    path: "/detail3",
    component: Detail3
  },
]

export default routes;