import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'utils/constants';

const CheckAuth = ({ auth }) => {
  const history = useHistory();

  useEffect(() => {
    if (!(auth && auth.id) && history.location.pathname !== ROUTES.login) {
      history.push(ROUTES.login);
    }
  }, [auth, history.location.pathname]);

  return null;
};

export default CheckAuth;
