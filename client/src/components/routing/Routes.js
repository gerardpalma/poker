import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import RegistrationPage from '../../pages/RegistrationPage';
import LoginPage from '../../pages/LoginPage';
import Dashboard from '../../pages/Dashboard';
import Play from '../../pages/Play';
import ProtectedRoute from './ProtectedRoute';
import StaticPage from '../../pages/StaticPage';
import NotFoundPage from '../../pages/NotFoundPage';
import CreatingNewRoom from '../../pages/CreatingNewRoom';

const Routes = () => {
  const staticPages  = [{
    slug:"news",
    title: "news",
    content: "Soon you'll find the latest news here."
  }];

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/register" component={RegistrationPage} />
      <Route path="/login" component={LoginPage} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/createNewRoom" component={CreatingNewRoom} />
      {staticPages &&
        staticPages.map((page) =>{ 
          
          return (
            <Route
              key={page.slug}
              path={`/${page.slug}`}
              component={() => (
                <StaticPage title={page.title} content={page.content} />
              )}
            />
        )})}
      <ProtectedRoute path="/play" component={Play} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
