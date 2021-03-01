import './App.css';
import SignIn from './components/signIn/index';
import SignUp from './components/signUp/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path= "/signIn">
              <SignIn/>
            </Route>
            <Route path ="/signUp">
              <SignUp/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
