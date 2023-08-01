import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import { getMarketData } from './Redux/MarketSlice/MarketSlice';
import NavBar from './components/NavBar';
import Home from './components/Home';
import CompanyDisplay from './components/CompanyDisplay';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarketData());
  }, [dispatch]);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<CompanyDisplay />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
