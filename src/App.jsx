import { Route, Routes } from "react-router-dom"
import { CreateProduct, Filter, Login, ProductDetail, Profile, Register } from "./pages"
import { Footer, Navbar } from "./components"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
