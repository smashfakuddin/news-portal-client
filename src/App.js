import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SlideShow from './components/SlideShow';
import TopNews from './components/TopNews';
import Category from './components/Category';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Category />
        <SlideShow />
        <TopNews />
      </Router>
    </>
  );
}

export default App;
