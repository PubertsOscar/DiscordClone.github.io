import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Channel from "./pages/Channel";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/channels" element={<Channel/>} />
          <Route exact path="/channels/:id" element={<Channel/>} />
        </Routes>
    </Router>
  );
}

export default App;
