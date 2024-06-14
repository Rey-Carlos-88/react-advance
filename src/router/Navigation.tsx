import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import routes from './routes'


export const Navigation = () => {
    console.log('qwerty routes => ',routes)
    return (
        <BrowserRouter>
            <div className='main-layout'>
                <Routes>
                    {
                        routes.map((item) => (
                            <Route
                                key={item.path}
                                path={item.path}
                                element={<item.Component />}
                            />
                            
                        ))
                    }
                    <Route path='/*' element={ <Navigate to={routes[0].path} replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
