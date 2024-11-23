import NavBar from './components/NavBar';
import './App.css';
import Main from './pages/Main';
import SE1 from './pages/SE1';
import SE2 from './pages/SE2';
import SE3 from './pages/SE3';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/s1" element={<SE1 />} />
          <Route path="/s2" element={<SE2 />} />
          <Route path="/s3" element={<SE3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


