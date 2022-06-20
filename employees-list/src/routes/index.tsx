import { FC, useEffect } from 'react';
import { Router as RRouter } from 'react-router-dom';
import Routes from './Routes';
import { createBrowserHistory } from 'history';

const Router: FC = () => {
  const history = createBrowserHistory();

    return (
        <RRouter history={history}>
          <Routes />
        </RRouter>
      );
}

export default Router;