
import './api/axiosDefault'
import logo from './logo.svg';
import styles from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import RegistrationForm from './pages/auth/RegistrationForm';
import PostQuestionForm from './pages/questions/PostQuestionForm';
import LogInForm from './pages/auth/LogInForm';
import Loader from './assets/loader/Loader';



function App() {

  return (
        <div className={styles.App}>
          <NavBar />
          <Container fluid className={styles.AppContainer}>
            <Switch>
              <Route exact path="/" render={() => (
                <header className="App-header">
                  <Loader />
                </header>
              )} />
              <Route exact path="/login" render={() => <LogInForm />} />
              <Route exact path="/register" render={() => <RegistrationForm />} />
              <Route exact path="/posts/create" render={() => <PostQuestionForm />} />
              <Route render={() => <p>Sorry lad(y), this path is a dead end</p>} />
            </Switch>

          </Container>
        </div>
  );
}

export default App;