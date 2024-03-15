import Home from "../assets/home.svg"
import Hobbi from "../assets/hobbi.svg"
import Garden from "../assets/garden.svg"
import Cars from "../assets/cars.svg"
import Texno from "../assets/texno.svg"
import Children from "../assets/children.svg"
import Service from "../assets/service.svg"
import Animals from "../assets/animals.svg"
import Free from "../assets/free.svg"
import Exchange from "../assets/exchange.svg"
import { Link } from "react-router-dom"
const Categories = () => {
    return (
        <div className="container my-10">
            <h1 className="text-2xl my-4">Kategoriyalar</h1>
            <div className="flex gap-6">
                {
                    categories.map((category) => (
                        <Link to={`/category/${category.title}`} key={category.id} className="flex flex-col gap-2 items-center text-center w-[90px]">
                            <img src={category.img} alt="" />
                            <p>{category.name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories

const categories = [
    {
        id: 1,
        title: "home",
        img: Home,
        name: "Ko’chmas mulk"
    },
    {
        id: 2,
        title: "hobbi",
        img: Hobbi,
        name: "Hobbi"
    },
    {
        id: 3,
        title: "garden",
        img: Garden,
        name: "Bog’"
    },
    {
        id: 4,
        title: "cars",
        img: Cars,
        name: "Transport"
    },
    {
        id: 5,
        title: "texno",
        img: Texno,
        name: "Elektr jihozlari"
    },
    {
        id: 6,
        title: "children",
        img: Children,
        name: "Bolalar  uchun"
    },
    {
        id: 7,
        title: "service",
        img: Service,
        name: "Xizmatlar"
    },
    {
        id: 8,
        title: "animals",
        img: Animals,
        name: "Hayvonlar"
    },
    {
        id: 9,
        title: "free",
        img: Free,
        name: "Tekinga beraman"
    },
    {
        id: 10,
        title: "exchange",
        img: Exchange,
        name: "Ayirboshlash"
    },
]