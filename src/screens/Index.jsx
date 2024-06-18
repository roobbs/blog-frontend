import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "../styles/screens/Index.css";

function Index() {
  return (
    <div className="index">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Index;
