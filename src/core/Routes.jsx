import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScreensSearch from 'screens/Search/Search';
import ScreensAddForm from 'screens/Add/Form/Form';
import ScreensOfferDetails from 'screens/OfferDetails/OfferDetails';
import ScreensLogin from 'screens/Login/Login';

export default() => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ScreensSearch} />
      <Route path="/add/form" component={ScreensAddForm} />
      <Route path="/offer/:offerId" component={ScreensOfferDetails} />
      <Route path="/login" component={ScreensLogin} />
    </Switch>
  </BrowserRouter>
);
