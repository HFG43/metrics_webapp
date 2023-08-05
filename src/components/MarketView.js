import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMarketData } from '../Redux/MarketSlice/MarketSlice';
import styles from './MarketView.module.css';

const MarketView = () => {
  const marketInfo = useSelector((state) => state.market.marketData);
  const status = useSelector((state) => state.market.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getMarketData());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Retrieving S&P 500 price... Please wait</div>;
  }

  if (!marketInfo || marketInfo.length === 0) {
    return <div>Data not available</div>;
  }

  return (
    <>
      <section className={styles.market_container}>
        <div className={styles.market_logo}>
          <h2>STANDARD & POOR&rsquo;S</h2>
          <br />
          <span>Best Performing Companies Prices</span>
        </div>
        <div className={styles.market_data}>
          <h2>S&P 500</h2>
          <span>{marketInfo[0].price}</span>
        </div>
      </section>
    </>
  );
};

export default MarketView;
