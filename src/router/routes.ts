import { lazy, LazyExoticComponent } from 'react';
//import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';
import { LazyPage1 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSX.Element;
    //Component: () => JSX.Element
    name: string;
}


const Lazy1 = lazy(() => import(/* webpackChunkName: 'LazyPage1' */ '../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: 'LazyPage2' */ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: 'LazyPage3' */ '../01-lazyload/pages/LazyPage3'));

export const routes = [
    {
        to: '/lazy1',
        path: 'azy-1',
        Component: Lazy1,
        name: 'Lazy-Page-1'
    },
    {
        to: '/lazy2',
        path: 'lazy-2',
        Component: Lazy2,
        name: 'Lazy-Page-2'
    },
    {
        to: '/lazy3',
        path: 'lazy-3',
        Component: LazyPage1,
        name: 'Lazy-Page-3'
    }
];