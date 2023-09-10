
import './api/axiosDefault'
import logo from './logo.svg';
import styles from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import RegistrationForm from './pages/auth/RegistrationForm';

import LogInForm from './pages/auth/LogInForm';



function App() {

  return (
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
  );
}

export default App;