import React from 'react';
import {RouteObject, Routes, useRoutes} from 'react-router-dom';
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
      path: "/x-or-o",
      element: <PalayersChoicePage />
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
