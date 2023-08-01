import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
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
        <Route path="/home" elements={<Home />} />
        <Route path="/companies-info" elements={<CompanyDisplay />} />
      </Routes>
    </>
  );
}

export default App;
