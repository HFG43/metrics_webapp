import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CompanyDisplay from './components/CompanyDisplay';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company/:symbol" element={<CompanyDisplay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
