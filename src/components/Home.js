import CompaniesList from './CompaniesList';
import MarketView from './MarketView';
import styles from './Home.module.css';

const Home = () => (
  <>
    <MarketView />
    <h3 className={styles.company_price_header}>PRICE BY COMPANY</h3>
    <CompaniesList />
  </>
);
export default Home;
