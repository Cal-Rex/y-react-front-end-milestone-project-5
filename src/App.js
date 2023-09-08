import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import logo from './logo.svg';
import styles from './App.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.AppContainer}>
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
          <Route exact path="/register" render={() => <h1>Create an Account</h1>} />
      </Switch>
        
      </Container>
    </div>
  );
}

export default App;