import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Achievements from "./pages/achievements";
import Events from "./pages/events";
import Resources from "./pages/resources";
import Navbar from "./components/navbar";
import websiteTheme from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={websiteTheme}>
      <Router>
        <div style={{ overflowX: 'hidden', }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
