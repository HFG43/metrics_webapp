import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getMarketData } from './Redux/MarketSlice/MarketSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarketData());
  }, [dispatch]);

  return <div className="App">HOLA</div>;
}

export default App;
