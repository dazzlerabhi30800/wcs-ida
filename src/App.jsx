import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Routes/AboutUs";
import ServicePage from "./Routes/ServicePage";
import ServiceDetail from "./Routes/ServiceDetail";
import ProjectPage from "./Routes/ProjectPage";
import ProjectDetailPage from "./Routes/ProjectDetailPage";
import PeoplePage from "./Routes/PeoplePage";
import BlogPage from "./Routes/BlogPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/service" element={<ServicePage />} />
          <Route exact path="/serviceDetail" element={<ServiceDetail />} />
          <Route exact path="/projects" element={<ProjectPage />} />
          <Route exact path="/projectDetail" element={<ProjectDetailPage />} />
          <Route exact path="/people" element={<PeoplePage />} />
          <Route exact path="/blogs" element={<BlogPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
