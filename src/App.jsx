import React from 'react';
import './s'  // Import du fichier CSS global
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginSignUp from './pages/LoginSignup';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/login" render={() => <LoginSignUp isSignup={false} />} />
          <Route path="/signup" render={() => <LoginSignUp isSignup={true} />} />
          <Route path="/" exact>
            <h1>Welcome to the Church App</h1>
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
