import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
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
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/companies-info" element={<CompanyDisplay />} />
      </Routes>
    </>
  );
}

export default App;
