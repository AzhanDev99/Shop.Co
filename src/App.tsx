import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Page1";
import Category from "./Pages/Category";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Category' element={<Category />}></Route>
          {/* <Page1 /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
