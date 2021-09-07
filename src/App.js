import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import SlideShow from './components/SlideShow';
import TopNews from './components/TopNews';
import Category from './components/Category';
import News from './components/News';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Category />
        <SlideShow />
        <TopNews />
        <News />
      </Router>
    </>
  );
}

export default App;
