import React from 'react';

import WinXP from 'WinXP';
import ReactGA from 'react-ga';

ReactGA.initialize('SGHXTLN7VW'); // Remplacez par votre ID de suivi
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return <WinXP />;
};

export default App;
