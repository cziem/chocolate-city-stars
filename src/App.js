import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
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
        <Route path="/album" element={<Album />} />
        {/* <Route /> */}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
