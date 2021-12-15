import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Gallery from "./components/Cards/Gallery"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Album from "./pages/album"
import Home from "./pages/home"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/albums/:username" element={<Album />} />
        <Route path="albums/:username/:photoId" element={<Gallery />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
