import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SlideShow from './components/SlideShow';
import TopNews from './components/TopNews';
import Category from './components/Category';
import News from './components/News';
import Footer from './components/Footer';
import Login from './components/Login';
import { createContext, useState } from 'react';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInuser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInuser]}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
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
    </UserContext.Provider>
  );
}

export default App;
