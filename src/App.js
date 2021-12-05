//Thư viện giúp chuyển hướng trang ở các file không phải là component
import { Spin } from "antd";
import { createBrowserHistory } from "history";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch, Router } from "react-router-dom";
import "./App.css";
import { userRouter, adminRouter } from "./constant/Route";
import BookingMovie from "./pages/BookingMovie/BookingMovie";
import PublicRoute from "./routes/PublicRoute";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import PrivateRoute from './routes/PrivateRoute';

export const history = createBrowserHistory();

function App() {
  return (
    <Suspense fallback={<Spin />}>
      <Router history ={history}>
      <ScrollToTop/>
        <Switch>
          {userRouter.map((user, index) => {
            const Component = user.component;
            return (
              <Route
                exact
                key={`router-user-${index}`}
                path={user.path}
                render={(propsRoute) => (
                  <PublicRoute>
                    <Component {...propsRoute}/>
                  </PublicRoute>
                )}
              />
            );
          })}


          <Route
            exact
            path="/ticketroom/:maLichChieu"
            component={BookingMovie}
          />


          {adminRouter.map((router, index) => {
            const Component = router.component;
            return (
              <Route
                exact
                key={`router-admin-${index}`}
                path={router.path}
                render={(propsRoute) => (
                  <PrivateRoute>
                    <Component {...propsRoute}/>
                  </PrivateRoute>
                )}
              />
            );
          })}



          {false ? <Redirect to="/admin" /> : <Redirect to="/" />}

          {/* <HomeTemplate exact path="/home" Component={Home} />
          <HomeTemplate
            exact
            path="/moviedetail/:movieId"
            Component={MovieDetail}
          />
          <Route
            exact
            path="/ticketroom/:maLichChieu"
            component={BookingMovie}
          />

          <HomeTemplate exact path="/" Component={Home} />

          <HomeTemplate exact path="/" Component={Home} />
          <Route exact path="/login" render={() => <SignIn />} /> */}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
