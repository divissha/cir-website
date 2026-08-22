import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Collaborations from "./pages/Collaborations";
import OfficePG from "./pages/OfficePG";


function App() {

  return (

    <BrowserRouter>

      <div className="page-background min-h-screen">

        <Navbar />

        <main>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/members"
              element={<Members />}
            />

            <Route
              path="/collaborations"
              element={<Collaborations />}
            />

            <Route
              path="/office-pg"
              element={<OfficePG />}
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;