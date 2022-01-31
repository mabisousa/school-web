import React from 'react';
import Global from './style/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes/>
        
        <Global/>
      </Router>
    </>
  );
}

export default App;