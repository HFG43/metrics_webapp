import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCompaniesData } from '../Redux/CompaniesSlice/CompaniesSlice';
import styles from './CompaniesList.module.css';
import arrow from '../Assets/arrow_next.svg';

function CompaniesList() {
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
      <div className={styles.companies_list_container}>
        {companies.map((company, index) => (
          <Link key={company.simbol} to={`/company/${company.symbol}`}>
            <article
              key={company.symbol}
              className={(index + 1) % 4 === 0 || (index + 1) % 4 === 1 ? styles.obsc : styles.lig}
            >
              <div>
                <div className={styles.name_arrow_container}>
                  <img className={styles.arrow} src={arrow} alt="Arrow icon" />
                  <div className={styles.name_container}>
                    <span className={styles.company_name}>{company.name}</span>
                  </div>
                </div>
                <div className={styles.symbol_price_container}>
                  <p>{company.symbol}</p>
                  <span>{company.price}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export default CompaniesList;
