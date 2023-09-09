import { useState, useEffect, createContext } from 'react';
import './api/axiosDefault'
import logo from './logo.svg';
import styles from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import RegistrationForm from './pages/auth/RegistrationForm';
import axios from 'axios';
import LogInForm from './pages/auth/LogInForm';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null)



  const handleMount = async () => {
    try {
      const { data } = await axios.get('dj-rest-auth/user/')
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleMount();
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container fluid className={styles.AppContainer}>
            <Switch>
              <Route exact path="/" render={() => (
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="success">Success</Button>{' '}
                  </a>
                </header>
              )} />
              <Route exact path="/login" render={() => <LogInForm />} />
              <Route exact path="/register" render={() => <RegistrationForm />} />
              <Route render={() => <p>Sorry lad(y), this path is a dead end</p>} />
            </Switch>

          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;