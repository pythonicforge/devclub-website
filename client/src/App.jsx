import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import Home from "./pages/home";
import About from "./pages/about";
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
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;