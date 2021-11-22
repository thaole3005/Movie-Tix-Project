import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
//Thư viện giúp chuyển hướng trang ở các file không phải là component
import { createBrowserHistory } from "history";
import Loading from "./components/Loading/Loading";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import BookingMovie from "./pages/BookingMovie/BookingMovie";
import "./App.css";

import SignIn from "./pages/SignIn/SignIn";
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      {/* <Loading/> */}

      <Switch>
        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate
          exact
          path="/moviedetail/:movieId"
          Component={MovieDetail}
        />
        <Route exact path="/booking/:movieId" component={BookingMovie} />

        <HomeTemplate exact path="/" Component={Home} />

        <HomeTemplate exact path="/" Component={Home} />
        <Route exact path="/login" render={() => <SignIn />} />
      </Switch>
    </Router>
  );
}

export default App;
