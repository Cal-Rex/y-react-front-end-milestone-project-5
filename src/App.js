
import './api/axiosDefault'
import styles from './App.module.css'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import RegistrationForm from './pages/auth/RegistrationForm';
import PostQuestionForm from './pages/questions/PostQuestionForm';
import LogInForm from './pages/auth/LogInForm';
import Loader from './assets/loader/Loader';
import Footer from './components/Footer';
import QuestionPage from './pages/questions/QuestionPage';
import QuestionList from './pages/questions/QuestionList';
import { useCurrentUser } from './contexts/CurrentUserContext';
import Question from './pages/questions/Question';



function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.AppContainer}>
            <Switch>
              <Route exact path="/" render={
                () => <QuestionList 
                  message="We can't find anything that matches that criteria, captain." 
                />
              }/>
              <Route exact path="/following" render={
                () => <QuestionList 
                  message="We can't find anything that matches that criteria, captain."
                  filter={`owner__followed__owner__profile=${profile_id}&`} 
                />
              }/>
              {/* for profile page, liked questions by user */}
              {/* <QuestionList filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`} */}
              <Route exact path="/login" render={() => <LogInForm />} />
              <Route exact path="/register" render={() => <RegistrationForm />} />
              <Route exact path="/posts/:id" render={() => <QuestionPage />}/>
              <Route exact path="/posts/create" render={() => <PostQuestionForm />} />
              <Route render={() => <p>Sorry lad(y), this path is a dead end</p>} />
            </Switch>

            
          </Container>
          <Footer />
        </div>
  );
}

export default App;