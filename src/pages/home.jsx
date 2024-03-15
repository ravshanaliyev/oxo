import { Cards, Categories, HomeSearch } from '../components'

const Home = () => {
    return (
        <div className=''>
            <HomeSearch />
            <Categories />
            <Cards />
        </div>
    )
}

export default Home