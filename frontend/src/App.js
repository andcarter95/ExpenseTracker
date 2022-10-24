
import "./styles/App.module.scss";

import { Routes, Route } from "react-router-dom"

//components
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar"
import MobileNavbar from "./components/Navbar/MobileNavbar";

function App() {
  return <div className="App">
    <PageContainer>
      <Navbar className="navbar"/>
      <div className="mobileMenu">
        <MobileNavbar/>
      </div>
      <Routes>
        <Route></Route>
      </Routes>
    </PageContainer>
    </div>;
}

export default App;
