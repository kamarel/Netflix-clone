import{BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NetflixShow from "./pages/NetflixShow";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/netflix-show" component={NetflixShow}/>
        </Switch>
        <Footer/>
        
     </div>
    </Router>
    
  );
}

export default App;
