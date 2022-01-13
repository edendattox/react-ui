import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./pages/Info";
import Home from "./pages/Home";
import "./app.css";

const AppEl = styled.div`
  display: flex;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Router>
      <AppEl>
        <Routes>
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AppEl>
    </Router>
  );
}

export default App;
