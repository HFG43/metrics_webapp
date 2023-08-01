import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCompaniesData } from '../Redux/CompaniesSlice/CompaniesSlice';

function CompaniesList() {
  const companies = useSelector((state) => state.companies.companiesData);
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
        {companies.map((company) => (
          <div key={company.company_symbol}>
            <span>{company.company_name}</span>
            <span>{company.company_price}</span>
            <span>Prueba</span>
          </div>
        ))}
      </article>
    </>
  );
}

export default CompaniesList;
