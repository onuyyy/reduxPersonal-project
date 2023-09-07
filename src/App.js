
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from './store/store'
import Footer from "./components/layout/Footer";
import Space_detail from "./components/space/Space_detail";
import Space_find from "./components/space/Space_find";
import Space_allList from "./components/space/Space_allList";
import Home from "./components/layout/Home";
import Header from "./components/layout/Header";

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Header/>
          <div className={"container"}>
            <Routes>
              <Route exact path={"/"} element={<Home/>}/>
              <Route path={"/layout/footer"} element={<Footer/>}/>
              <Route path={"/layout/header"} element={<Header/>}/>
              <Route path={"/space/space_detail/:spaceId"} element={<Space_detail/>}/>
              <Route path={"/space/space_find"} element={<Space_find/>}/>
              <Route path={"/space/space_allList"} element={<Space_allList/>}/>
            </Routes>
          </div>
        </Router>
      </Provider>
  );
}

export default App;
