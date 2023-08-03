import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCompaniesData } from '../Redux/CompaniesSlice/CompaniesSlice';
import arrow from '../Assets/arrow_next.svg';
import styles from './Company.module.css';

function Company() {
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
      <article>
        {companies.map((company) => {
          if (company.symbol === symbol) {
            return (
              <div key={company.symbol} className={styles.company_container}>
                <div className={styles.company_details_header}>
                  Finantial details:&nbsp;&nbsp;&nbsp;
                  {company.name}
                </div>
                <ul className={styles.company_details}>
                  <li>
                    <h3>Price</h3>
                    <div className={styles.arrow_value_container}>
                      <span>{company.price}</span>
                      <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
                    </div>
                  </li>
                  <li>
                    <h3>Lowest Price</h3>
                    <div className={styles.arrow_value_container}>
                      <span>{company.dayLow}</span>
                      <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
                    </div>
                  </li>
                  <li>
                    <h3>Highest Price</h3>
                    <div className={styles.arrow_value_container}>
                      <span>{company.dayHigh}</span>
                      <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
                    </div>
                  </li>
                  <li>
                    <h3>Average Price</h3>
                    <div className={styles.arrow_value_container}>
                      <span>{company.priceAvg50}</span>
                      <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
                    </div>
                  </li>
                  <li>
                    <h3>Opening Price</h3>
                    <div className={styles.arrow_value_container}>
                      <span>{company.open}</span>
                      <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
                    </div>
                  </li>
                  <li>
                    <h3>Previous Closing Price</h3>
                    <div className={styles.arrow_value_container}>
                      <span>{company.previousClose}</span>
                      <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
                    </div>
                  </li>
                  <li>
                    <h3>Volume Operated</h3>
                    <div className={styles.arrow_value_container}>
                      <span>{company.volume}</span>
                      <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
                    </div>
                  </li>
                </ul>
              </div>
            );
          }
          return null;
        })}
      </article>
    </>
  );
}

export default Company;
