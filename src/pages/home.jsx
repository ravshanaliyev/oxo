import Cookies from 'js-cookie';
import { Cards, Categories, HomeSearch } from '../components'

const Home = () => {
    console.log(Cookies.get("token"));

    return (
        <div className=''>
            <HomeSearch />
            <Categories />
            <Cards />
        </div>
    )
}

export default Home