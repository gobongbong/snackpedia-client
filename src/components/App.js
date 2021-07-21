import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import SnackList from "./SnackList";
import SnackDetail from "./SnackDetail";
import Search from "./Search";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "../css/App.css";
import "../css/SideBar.css";
import "../css/NavBar.css";

import SnackRegister from "./SnackRegister";
import logo from "../images/snack.png";
import colorLogo from "../images/color_snack.png";

function App() {
  const [mockData, setMockData] = useState([]);
  const [search, setSearch] = useState("");

  // TODO 과자 등록이 구현되면 없애기
  useEffect(() => {
    axios.get("http://localhost:3000/data/data.json").then((res) => {
      setMockData(res.data.data);
    });
  }, []); // 마운트만 할 경우 [] 추가

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = (e) => {
    return <Link to="search"></Link>;
  };

  const resetInput = () => {
    setSearch("");
  };

  return (
    <div className="App">
      <div className="nav-div">
        <div className="nav-logo">
          <div>
            <img src={colorLogo} alt="nav-logo" className="color-logo" />
          </div>
          <div className="nav-logo-title">
            <Link to="/" className="title">
              Snackpedia
            </Link>
          </div>
        </div>

        <div className="nav-interaction">
          <div className="nav-user">
            {/* TODO 추후 로그인 여부에 따른 Link 태그 변경 */}
            <Link to="/signin" className="nav-user-link">
              Signin
            </Link>
            <Link to="/signup" className="nav-user-link">
              Signup
            </Link>
            <Link to="/signup" className="nav-user-link">
              Mypage
            </Link>
          </div>

          <div className="search-div">
            <input
              type="text"
              name="search"
              value={search}
              onChange={onChange}
              className="search-input"
            />
            <Link to="/search">
              <input
                type="button"
                value="🍫"
                className="search-btn"
                onClick={onClick}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="main-side-content">
        <aside className="sidebar-main">
          <h1>
            <img src={logo} alt="side-logo" className="sidebar-img" />
            Snacks
          </h1>
          <ul>
            <li>
              <Link to="/snack/income" className="sidebar-link">
                수입제과
              </Link>
            </li>
            <li>
              <Link to="/snack/icecream" className="sidebar-link">
                아이스크림
              </Link>
            </li>
            <li>
              <Link to="/snack/cookie" className="sidebar-link">
                과자 / 쿠키
              </Link>
            </li>
            <li>
              <Link to="/snack/chocolate" className="sidebar-link">
                초콜릿 / 캔디
              </Link>
            </li>
            <li>
              <Link to="/SnackRegister" className="sidebar-link">
                과자 등록
              </Link>
            </li>
          </ul>

          <h1>
            <img src={logo} alt="side-logo" className="sidebar-img" />
            Notice
          </h1>
          <ul>
            <li>
              <Link to="/notice" className="sidebar-link">
                공지사항
              </Link>
            </li>
          </ul>
        </aside>

        <Switch>
          <Route
            exact="exact"
            path="/"
            render={() => {
              return <SnackList snacks={mockData} />;
            }}
          />

          <Route
            path="/snack/category"
            render={() => {
              return <SnackList snacks={mockData} />;
            }}
          />
          <Route path="/SnackRegister" component={SnackRegister} />
          <Route path="/snack/detail/:id" component={SnackDetail} />
          <Route
            path="/search"
            render={() => {
              return <Search search={search} resetInput={resetInput} />;
            }}
          />

          <Route exact="exact" path="/signin" component={SignIn} />
          <Route exact="exact" path="/signup" component={SignUp} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
