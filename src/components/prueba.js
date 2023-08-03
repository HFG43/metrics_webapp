import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCompaniesData } from '../Redux/CompaniesSlice/CompaniesSlice';

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
      <article>
        {companies.map((company) => (
          <div key={company.symbol}>
            <span>{company.name}</span>
            <span>{company.price}</span>
            <span>Prueba</span>
          </div>
        ))}
      </article>
    </>
  );
}

export default CompaniesList;
