import React from 'react';
import {RouteObject, useRoutes} from 'react-router-dom';
import GamePage from './pages/GamePage/GamePage';
import IntroPage from './pages/IntroPage/IntroPage';
import PalayersChoicePage from './pages/PlayersChoicePage/PalayersChoicePage';
import Settings from './pages/Settings/Settings';
import StatisticPage from './pages/StatisticPage/StatisticPage';

const App = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <IntroPage />      
    },
    {
      path: "/select",
      element: <PalayersChoicePage />
    },
    {
      path: '/play',
      element: <GamePage/>
    },
    {
      path: "/settings",
      element: <Settings />
    },
    {
      path: "/stats",
      element: <StatisticPage />
    }
  ];

  let elements = useRoutes(routes);

  return (
    <div >
      {elements}
    </div >
  );
}

export default App;
