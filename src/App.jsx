import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Slidebar from "./components/Slidebar";
import Developers from "./pages/Developers";
import Inspiration from "./pages/Inspiration";
import Initiatives from "./pages/Initiatives";
import Contact from "./pages/Contact";
import Slidebar2 from "./components/Slidebar2";
import Footer from "./components/Footer";
import YourSchool from "./pages/YourSchool";
import SchoolContribution from "./pages/SchoolContribution";

function App() {
  return (
    <BrowserRouter>
    <div className="bg-green-100 relative">
        <Slidebar />
        <Slidebar2 />

        <main className="xl:ml-[450px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developer" element={<Developers />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/yourSchool" element={<YourSchool />} />
            <Route path="/schoolContribution" element={<SchoolContribution />} />
          </Routes>
        </main>
    </div>
        
        <Footer />
    </BrowserRouter>
  );
};

export default App;
