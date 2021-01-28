import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { maineroutes } from './routes';

const App = () => (
  <>
    <Header />
    <Suspense fallback={<h1>Loading....</h1>}>
      <Switch>
        {maineroutes.map(route => {
          return (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </>
);

export default App;
