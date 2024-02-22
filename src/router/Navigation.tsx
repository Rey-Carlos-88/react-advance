import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg'

import {LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Loding ...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={ logo } alt='React logo'/>

                        <ul>
                            {
                                routes.map( ({ to, name })=> (
                                    <li key={ to }>
                                        <NavLink 
                                            to={ to } 
                                            className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                                { name }
                                        </NavLink>
                                    </li>
                                ))
                            }
                        
                        </ul>

                    </nav>

                    <Routes>
                        <Route path='Lazy1' element={ <LazyPage1/>} />
                        <Route path='Lazy2' element={ <LazyPage2/>} />
                        <Route path='Lazy3' element={ <LazyPage3/>} />
                        {/*{
                            routes.map( ({ path, Component }) => (
                                <Route
                                    key={ path }
                                    path={ path } 
                                    element={<Component /> } 
                                />
                            ))
                        } */}
                        

                        <Route path='/*' element={ <Navigate to={ routes[0].to }  replace /> } />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
