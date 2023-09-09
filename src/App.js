import './api/axiosDefault'
import { Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import styles from './App.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';
import RegistrationForm from './pages/auth/RegistrationForm';


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
          )}/>
          <Route exact path="/login" render={() => <h1>Log In</h1>} />
          <Route exact path="/register" render={() => <RegistrationForm />}/>
          <Route render={() => <p>Sorry lad(y), this path is a dead end</p>}/>
      </Switch>
        
      </Container>
    </div>
  );
}

export default App;