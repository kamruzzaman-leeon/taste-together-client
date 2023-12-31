import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../providers/AuthProvider';
import Loading from '../shared/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin" replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
