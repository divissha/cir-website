import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Members from "./pages/Members";
import Collaborations from "./pages/Collaborations";
import OfficePG from "./pages/OfficePG";
import EventsPage from "./components/events/EventsPage";
import StudentsPage from "./components/students/StudentsPage";
import GalleryPage from "./components/gallery/GalleryPage";
import DonationPage from "./components/donation/DonationPage";
import ProjectsPage from "./components/projects/ProjectsPage";


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

            <Route
              path="/events"
              element={<EventsPage />}
            />

            <Route
              path="/students"
              element={<StudentsPage />}
            />

            <Route
              path="/gallery"
              element={<GalleryPage />}
            />

            <Route
              path="/donation"
              element={<DonationPage />}
            />

            <Route 
              path="/projects" 
              element={<ProjectsPage />} 
            />

          </Routes>

        </main>

        <Footer />

      </div>

    </BrowserRouter>

  );

}

export default App;