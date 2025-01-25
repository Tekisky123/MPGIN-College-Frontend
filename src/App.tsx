import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Admissions from "./pages/Admissions";
import Fees from "./pages/Fees";
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Syllabus from "./pages/Syllabus";
import StudentPortal from "./pages/StudentPortal";
import PopupModal from "./components/PopupModal";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <PopupModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-portal/fees" element={<Fees />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-portal/placements" element={<Jobs />} />
          <Route path="/student-portal/syllabus" element={<Syllabus />} />
          <Route path="/student-portal/*" element={<StudentPortal />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
