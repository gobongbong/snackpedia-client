import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import SnackList from "./SnackList";
import SnackDetail from "./SnackDetail";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

import "../css/App.css";
import "../css/SideBar.css";
import "../css/NavBar.css";

import SnackRegister from "./SnackRegister";
import logo from "../images/snack.png";
import colorLogo from "../images/color_snack.png";

function App() {
  const [snack, setSnack] = useState([]);
  const [search, setSearch] = useState("");

  console.log(`쿠키 있니? ${document.cookie}`);

  useEffect(() => {
    //TODO document.cookie = "hi=gggg"; // 차선책

    axios.get("http://localhost:8080").then((res) => {
      // setSnack(res.data.data);
      if (!res.data.length) {
        console.log("DB에 Data 없으니 목업 데이터를 가져옴");
        axios.get("http://localhost:3000/data/data.json").then((res) => {
          setSnack(res.data.data);
        });
      } else {
        setSnack(res.data.data);
      }
    });
  }, []); // 마운트만 할 경우 [] 추가

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = (e) => {
    axios({
      method: "GET",
      url: `http://localhost:8080/search`,
      params: {
        search: search,
      },
    }).then((res) => {
      console.log(`검색된 결과 >>>> ${res.data}`);

      if (!res.data.data) {
        alert("검색된 결과가 없습니다. 다시 검색해 주세요");
      } else {
        setSnack(res.data.data);
      }

      setSearch("");
    });
  };

  const handleCategory = (category) => {
    axios({
      method: "GET",
      url: `http://localhost:8080/snack/${category}`,
      params: {
        category: category,
      },
    }).then((res) => {
      setSnack(res.data.data);
    });
  };

  return (
    <div className="App">
      <div className="nav-div">
        <div className="nav-logo">
          <div>
            <img src={colorLogo} alt="nav-logo" className="color-logo" />
          </div>
          <div className="nav-logo-title">
            <a href="/" className="title">
              Snackpedia
            </a>
          </div>
        </div>

        <div className="nav-interaction">
          <div className="nav-user">
            {!document.cookie ? (
              <div>
                <Link to="/signin" className="nav-user-link">
                  Signin
                </Link>
                <Link to="/signup" className="nav-user-link">
                  Signup
                </Link>
              </div>
            ) : (
              <Link to="/signup" className="nav-user-link">
                Mypage
              </Link>
            )}
          </div>

          <div className="search-div">
            <input
              type="text"
              name="search"
              value={search}
              onChange={onChange}
              className="search-input"
            />
            <input
              type="submit"
              value="🍫"
              className="search-btn"
              onClick={onClick}
            />
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
            exact
            path="/"
            render={() => {
              return <SnackList snacks={snack} />;
            }}
          />

          <Route
            exact
            path="/snack/:category"
            render={() => {
              handleCategory(window.location.href.slice(28));
              return <SnackList snacks={snack} />;
            }}
          />
          <Route path="/SnackRegister" component={SnackRegister} />
          <Route path="/snack/detail/:id" component={SnackDetail} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
