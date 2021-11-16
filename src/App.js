import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';



//Thư viện giúp chuyển hướng trang ở các file không phải là component
import {createBrowserHistory} from 'history';
import Loading from './components/Loading/Loading';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
export const history = createBrowserHistory();


function App() {
  return (
    <Router history ={history}>
      {/* <Loading/> */}

      <Switch>
          <HomeTemplate exact path ="/" Component = {Home}/>

      </Switch>
  
  
   
  </Router>
  );
}

export default App;
