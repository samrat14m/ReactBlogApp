// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Bollywood from "./component/Bollywood";
import Business from "./component/Business";
import Technology from "./component/Technology";
import NavBar from "./component/Navbar";
import Header from "./component/Header";
import Football from "./component/Football";
import Sports from "./component/Sports";
import Footer from "./component/Footer";
import DataContextProvider from "./contexts/DataContext";
import TechContextProvider from "./contexts/TechContext";
import SportsContextProvider from "./contexts/SportsContext";
import BusinessContextProvider from "./contexts/BusinessContext";
import FootballContextProvider from "./contexts/FootballContext";
const App = () => {
  return (
    <FootballContextProvider>
      <BusinessContextProvider>
        <SportsContextProvider>
          <TechContextProvider>
            <DataContextProvider>
              <BrowserRouter>
                <Header />
                <NavBar />
                <Routes>
                  <Route path="/Bollywood" element={<Bollywood />} />
                  <Route path="/Technology" element={<Technology />} />
                  <Route path="/Business" element={<Business />} />
                  <Route path="/Sports" element={<Sports />} />
                  <Route path="/Football" element={<Football />} />
                  <Route path="/" element={<Home />} />
                </Routes>
              </BrowserRouter>
              <Footer />
            </DataContextProvider>
          </TechContextProvider>
        </SportsContextProvider>
      </BusinessContextProvider>
    </FootballContextProvider>
  );
};

export default App;
