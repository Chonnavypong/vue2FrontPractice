import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../views/Login'
import Bom from '../views/Bom'
import Product from '../views/Product'
import WorkOrder from '../views/WorkOrder'
import Category from '../views/Category'
import Stock from '../views//Stock'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path:"/stock",
    name: "Stock",
    component: Stock,
  },
  {
    path: "/bom",
    name: "Bom",
    component: Bom,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/work order",
    name: "WorkOrder",
    component: WorkOrder,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
