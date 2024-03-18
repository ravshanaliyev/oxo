import { Route, Routes } from "react-router-dom"
import { CategorySingle, CreateProduct, Filter, Home, Liked, Login, ProductDetail, Profile, Register, Settings } from "./pages"
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
        <Route path="/settings" element={<Settings />} />
        <Route path="/product-detail/:category/:id" element={<CategorySingle />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
