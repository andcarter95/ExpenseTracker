
import "./styles/App.module.scss";

import { Routes, Route } from "react-router-dom"

//components
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar"
import MobileNavbar from "./components/Navbar/MobileNavbar";

//PAGES
import Auth from "./pages/Auth";

function App() {
  return <div className="App">
    <PageContainer optionClass={"pageContainer"}>
      <Navbar className="navbar"/>
      
      <Routes>
        <Route>
          <Route path="/auth" element={<Auth/>}/>
        </Route>
      </Routes>
      <div className="mobileMenu">
        <MobileNavbar/>
      </div>
    </PageContainer>
    </div>;
}

export default App;
