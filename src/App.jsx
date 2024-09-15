import "./App.css";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import ArticlePage from "./Routes/ArticlePage";
import ContactUs from "./Routes/ContactUs";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/contact" && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/service" element={<ServicePage />} />
        <Route exact path="/serviceDetail" element={<ServiceDetail />} />
        <Route exact path="/projects" element={<ProjectPage />} />
        <Route exact path="/projectDetail" element={<ProjectDetailPage />} />
        <Route exact path="/people" element={<PeoplePage />} />
        <Route exact path="/blogs" element={<BlogPage />} />
        <Route exact path="/article" element={<ArticlePage />} />
        <Route exact path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
