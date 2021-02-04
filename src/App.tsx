import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import Header from 'components/Header/Header';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Loader from './components/Loader';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import Error from './components/Error';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  const errorObj = useSelector(authSelectors.getError);

  React.useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      {isFetchingUser && <Loader />}
      {errorObj && <Error error={errorObj} />}
      {!isFetchingUser && !errorObj && (
        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/">
              <HomePage />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterPage />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts">
              <ContactsPage />
            </PrivateRoute>
          </Suspense>
        </Switch>
      )}
    </>
  );
};

export default App;
