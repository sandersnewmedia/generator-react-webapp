import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from 'components/app';
//home
import Home from 'components/home';

export const router = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  )
}

export default router;
