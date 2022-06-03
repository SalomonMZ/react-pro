import { FunctionComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

interface Route {
  to: string;
  path: string;
  Component: FunctionComponent;
  name: string;
}

const LazyLayout = lazy(
  () =>
    /* webpackChunkName: "LazyLayout" */ import(
      "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  {
    path: "/lazyload/*",
    to: "/lazyload/",
    Component: LazyLayout,
    name: "LazyLayout - Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No Lazy",
  },
];
