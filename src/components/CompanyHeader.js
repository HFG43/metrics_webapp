import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCompaniesData } from '../Redux/CompaniesSlice/CompaniesSlice';
import styles from './MarketView.module.css';

function CompanyHeader() {
  const { symbol } = useParams();
  const companies = useSelector((state) => state.companies.companies);
  const status = useSelector((state) => state.companies.status);

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCompaniesData());
    }
  }, [dispatch, status]);

  return (
    <>
      {companies.map((company) => {
        if (company.symbol === symbol) {
          return (
            <section key={company.symbol} className={styles.market_container}>
              <div className={styles.market_logo}>
                <h2>{company.name}</h2>
                <br />
                <span>Company Performance</span>
              </div>
              <div className={styles.market_data}>
                <h2>{company.symbol}</h2>
                <span>{company.price}</span>
              </div>
            </section>
          );
        } return null;
      })}
    </>
  );
}

export default CompanyHeader;
