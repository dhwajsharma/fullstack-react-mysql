import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';

function App() {

  return (
    <div className="app">
      <Router>
        <Link to="/createpost">Create A Post</Link>
        <Link to="/">Home Page</Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" exact component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
