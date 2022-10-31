import "./styles/App.module.scss";

import { Routes, Route, Outlet } from "react-router-dom";

//components
import PageContainer from "./components/Containers/PageContainer";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import MainContainer from "./components/Containers/MainContainer";

//PAGES
import Auth from "./pages/Auth";
import Home from "./pages/Home";

//REACT QUERY
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./constants/config";


function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <PageContainer optionClass={"pageContainer"}>
        <Navbar className="navbar" />
        <Routes>
          {/*AUTH*/}
          <Route path="/auth" element={<Auth />} />
          {/*PROTECTED ROUTES*/}
          <Route element={<Outlet />}>
            {/*HOME*/}
            <Route path="/" element={<Home />} />

            {/*404*/}
            <Route
              path="/*"
              element={
                <MainContainer>
                  <span style={{ fontSize: "1.2rem" }}>404 Page Not Found</span>
                </MainContainer>
              }
            />
          </Route>
        </Routes>

        <MobileNavbar className="mobileMenu" />
      </PageContainer>
      </QueryClientProvider>
    </div>
  );
}

export default App;
