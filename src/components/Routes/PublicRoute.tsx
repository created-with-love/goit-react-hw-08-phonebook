import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

interface IPublicRoute extends RouteProps {
  children: React.ReactElement;
  restricted?: boolean;
}

const PublicRoute = ({
  children,
  restricted = false,
  ...routeProps
}: IPublicRoute) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};

export default PublicRoute;
