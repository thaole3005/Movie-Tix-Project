//Thư viện giúp chuyển hướng trang ở các file không phải là component
import { Spin } from "antd";
import { createBrowserHistory } from "history";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { userRouter } from "./constant/Route";
import BookingMovie from "./pages/BookingMovie/BookingMovie";
import PublicRoute from "./routes/PublicRoute";

export const history = createBrowserHistory();

function App() {
  return (
    <Suspense fallback={<Spin />}>
      <BrowserRouter>
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
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
