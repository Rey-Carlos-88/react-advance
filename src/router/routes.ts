import { lazy, LazyExoticComponent } from 'react';
import { LazyPage1 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages/NoLazy';
//import { LazyLayout } from '../01-lazyload/layout/LazyLayout';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSX.Element;
    name: string;
}


const LazyLayout = lazy(() => import(/* webpackChunkName: 'LazyPage1' */ '../01-lazyload/layout/LazyLayout'));

export const routes = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];