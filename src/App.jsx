import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Home/00_Navbar";
import Footer from "./components/Home/08_Footer";

function App() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
