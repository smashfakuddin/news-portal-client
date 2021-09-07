import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SlideShow from './components/SlideShow';
import TopNews from './components/TopNews';
import Category from './components/Category';
import News from './components/News';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (

    <Router>
      <Nav />
      <Switch>
        <Route path='/home'>
          <Category />
          <SlideShow />
          <TopNews />
          <News />
        </Route>
        <Route path='/login'>
          <Login />
    
        </Route>
      </Switch>
        <Footer />
    </Router>

  );
}

export default App;
