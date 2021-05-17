import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';

import './TopNavBarStyle.scss';
import { TopBarContext } from '../contexts/TopBarContext';

function TopNavBar() {
  const [activeTab, setActiveTab] = useContext(TopBarContext);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="topNavBarContainer">
      <Paper className="topNavBarCard">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button
            variant={activeTab === 'home' && 'contained'}
            color="primary"
            onClick={() => changeTab('home')}
          >
            Home
          </Button>
        </Link>
        <Link to="/canvas" style={{ textDecoration: 'none' }}>
          <Button
            variant={activeTab === 'canvas' && 'contained'}
            color="primary"
            onClick={() => changeTab('canvas')}
          >
            Canvas
          </Button>
        </Link>
      </Paper>
    </div>
  );
}

export default TopNavBar;
