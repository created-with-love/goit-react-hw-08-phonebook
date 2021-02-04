import React, { Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import Header from 'components/Header/Header';
import PrivateRoute from './components/Routes/PrivateRoute';
import PublicRoute from './components/Routes/PublicRoute';
import Loader from './components/Loader';
import { authOperations } from 'redux/auth';
import authSelectors from 'redux/auth/auth-selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

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

  React.useEffect(() => {
    if (errorObj) {
      dispatch(authOperations.clearError());
      console.log(errorObj);

      toast.dark(`🦄 ${errorObj.message}`, {
        position: 'top-right',
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [errorObj, dispatch]);

  return (
    <>
      <Header />

      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {isFetchingUser && <Loader />}
      {!isFetchingUser && (
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
