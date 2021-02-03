import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

interface IPrivateRoute extends RouteProps {
  children: React.ReactElement;
}

const PrivateRoute = ({ children, ...routeProps }: IPrivateRoute) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="login" />}
    </Route>
  );
};

export default PrivateRoute;
