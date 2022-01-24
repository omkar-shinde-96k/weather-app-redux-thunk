import "./App.css";
import Navbar from "./componants/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./componants/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />}/>
          </Route>
        </Routes>
        <Footer />  
      </BrowserRouter>
    </>
  );
}

export default App;
