import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import { Toaster } from "react-hot-toast";
import About from "../src/Pages/About";
import Casual from "./Pages/Casual";
import Formal from "./Pages/Formal";
import Party from "./Pages/Party";
import Gym from "./Pages/Gym";
import Navbar from "./Pages/Navbar";
import Productdetails from "./Pages/Productdetails";
import Addtocart from "./Pages/Addtocart";
import Footer from "./Pages/Footer";
import ProdctPage from "./Pages/ProdctPage";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/ProdctPage' element={<ProdctPage />}></Route>
          <Route path='/Productdetails/:id' element={<Productdetails />}></Route>
          <Route path='/Casual' element={<Casual />}></Route>
          <Route path='/Formal' element={<Formal />}></Route>
          <Route path='/Party' element={<Party />}></Route>
          <Route path='/Gym' element={<Gym />}></Route>
          <Route path='/cart' element={<Addtocart />}></Route>
        </Routes>
        <Footer />
         <Toaster position='top-center' reverseOrder={false} />
      </BrowserRouter>
    </>
  );
}

export default App;


