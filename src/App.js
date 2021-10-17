import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import About from "./components/Pages/About/About";
import AboutDetails from "./components/Pages/AboutDetails/AboutDetails";
import Contact from "./components/Pages/Contact/Contact";
import NotFound from "./components/Pages/NotFound/NotFound";
import Home from "./components/Pages/Home/Home";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about/:id" component={AboutDetails} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/page-not-found" component={NotFound} />
          <Redirect from="/" to="/home" exact />
          <Redirect to="/page-not-found" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
