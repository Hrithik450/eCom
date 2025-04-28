import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home.jsx";
import NotFound from "../pages/notFound.jsx";
import Navbar from "../components/layout/navbar/navbar.jsx";
import Footer from "../components/layout/footer.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
