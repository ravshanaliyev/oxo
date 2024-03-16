import { Route, Routes } from "react-router-dom"
import { CreateProduct, Filter, Home, Liked, Login, ProductDetail, Profile, Register } from "./pages"
import { Footer, Navbar } from "./components"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/filter/:category" element={<Filter />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
