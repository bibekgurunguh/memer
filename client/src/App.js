import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import ContextProvider from './contexts';
import { TopBarContext } from './contexts/TopBarContext';
import TopNavBar from './components/TopNavBarComponent';

// Screens
import HomeScreen from './screens/HomeScreen';
import CanvasScreen from './screens/CanvasScreen';

function App() {
  const TabContext = useContext(TopBarContext);
  useEffect(() => {
    console.log('TopBarContext', TabContext);
  });
  return (
    <ContextProvider>
      <Router>
        <div className="App">
          <TopNavBar />
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/canvas">
              <CanvasScreen />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
