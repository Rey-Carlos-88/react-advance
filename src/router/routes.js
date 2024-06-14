import LoginUser  from '../components/LoginUser/loginUser';
import Comics from '../components/Comics/comics';
import ComicDetail from '../components/ComicDetail/comicDetail'

const routes = [
    {
        path: '/login',
        Component: LoginUser,
    },
    {
        path: '/comics',
        Component: Comics
    },
    {
        path: '/comic-detail',
        Component: ComicDetail
    },
]

export default routes;