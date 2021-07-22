import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import colorLogo from "../images/color_snack.png";
import SnackTag, {
  oily,
  spicy,
  sweet,
  salty,
  sour,
  flat,
  crispy,
  soft,
} from "./SnackTag";

//import SnackAllergyCheck from "./SnackAllergyCheck";
import SnackUploadImg, { images } from "./SnackUploadImg";
import "antd/dist/antd.css";

import "../css/SnackRegister.scss";
import { Select } from "antd";
import { Checkbox, Col } from "antd";
const { Option } = Select;
var i = 0;
var bean = 0,
  milk = 0,
  wheat = 0,
  egg = 0,
  fork = 0,
  fish = 0;
var beanch = 0,
  milkch = 0,
  eggch = 0,
  fishch = 0,
  forkch = 0,
  wheatch = 0;
var MSG = 0,
  asparm = 0,
  color = 0,
  sulfite = 0,
  atsugar = 0,
  atfat = 0,
  swelling = 0,
  atsodium = 0;
var MSGch = 0,
  asparmch = 0,
  colorch = 0,
  sulfitech = 0,
  atsugarch = 0,
  atfatch = 0,
  swellingch = 0,
  atsodiumch = 0;
var cate = 0;

function handleChange(value) {
  //  console.log(`selected ${value}`);
  cate = `${value}`;
}
function onChange(checkedValues) {
  //console.log("checked = ", checkedValues);
  for (i = 0; i < checkedValues.length; i++) {
    //console.log("checked = ", i);
    if (checkedValues[i] === "A") {
      beanch = 1;
    }
    if (checkedValues[i] === "B") {
      milkch = 1;
    }
    if (checkedValues[i] === "C") {
      eggch = 1;
    }
    if (checkedValues[i] === "D") {
      fishch = 1;
    }
    if (checkedValues[i] === "E") {
      forkch = 1;
    }
    if (checkedValues[i] === "F") {
      wheatch = 1;
    }
  }
  if (beanch === 1) {
    bean = 1;
    beanch = 0;
  } else if (beanch === 0) {
    bean = 0;
  }
  if (milkch === 1) {
    milk = 1;
    milkch = 0;
  } else if (milkch === 0) {
    milk = 0;
  }
  if (eggch === 1) {
    egg = 1;
    eggch = 0;
  } else if (eggch === 0) {
    egg = 0;
  }
  if (fishch === 1) {
    fish = 1;
    fishch = 0;
  } else if (fishch === 0) {
    fish = 0;
  }
  if (forkch === 1) {
    fork = 1;
    forkch = 0;
  } else if (forkch === 0) {
    fork = 0;
  }
  if (wheatch === 1) {
    wheat = 1;
    wheatch = 0;
  } else if (wheatch === 0) {
    wheat = 0;
  }
  //console.log("bean = ",bean, milk,egg,fish,fork,wheat,MSG,color,atsodium,sulfite,atsugar,atfat,swelling,asparm);
}

function onChange1(checkedValues) {
  //console.log("checked = ", checkedValues);
  for (i = 0; i < checkedValues.length; i++) {
    //console.log("checked = ", i);

    if (checkedValues[i] === "A1") {
      MSGch = 1;
    }
    if (checkedValues[i] === "B1") {
      colorch = 1;
    }
    if (checkedValues[i] === "C1") {
      atsodiumch = 1;
    }
    if (checkedValues[i] === "D1") {
      sulfitech = 1;
    }
    if (checkedValues[i] === "E1") {
      atsugarch = 1;
    }
    if (checkedValues[i] === "F1") {
      atfatch = 1;
    }
    if (checkedValues[i] === "G1") {
      swellingch = 1;
    }
    if (checkedValues[i] === "H1") {
      asparmch = 1;
    }
  }

  if (MSGch === 1) {
    MSG = 1;
    MSGch = 0;
  } else if (MSGch === 0) {
    MSG = 0;
  }
  if (atsodiumch === 1) {
    atsodium = 1;
    atsodiumch = 0;
  } else if (atsodiumch === 0) {
    atsodium = 0;
  }
  if (asparmch === 1) {
    asparm = 1;
    asparmch = 0;
  } else if (asparmch === 0) {
    asparm = 0;
  }
  if (colorch === 1) {
    color = 1;
    colorch = 0;
  } else if (colorch === 0) {
    color = 0;
  }
  if (sulfitech === 1) {
    sulfite = 1;
    sulfitech = 0;
  } else if (sulfitech === 0) {
    sulfite = 0;
  }
  if (atsugarch === 1) {
    atsugar = 1;
    atsugarch = 0;
  } else if (atsugarch === 0) {
    atsugar = 0;
  }
  if (atfatch === 1) {
    atfat = 1;
    atfatch = 0;
  } else if (atfatch === 0) {
    atfat = 0;
  }
  if (swellingch === 1) {
    swelling = 1;
    swellingch = 0;
  } else if (swellingch === 0) {
    swelling = 0;
  }
  //console.log("1bean = ",bean, milk,egg,fish,fork,wheat,MSG,color,atsodium,sulfite,atsugar,atfat,swelling,asparm);
}
const SnackRegister = () => {
  const [snackName, setsnackName] = useState("");
  const [snackAmount, setsnackAmount] = useState("");
  const [snackCalories, setsnackCalories] = useState("");
  const [snackCarbo, setsnackCarbo] = useState("");
  const [snackChol, setsnackChol] = useState("");
  const [snackFat, setsnackFat] = useState("");
  const [snackProtein, setsnackProtein] = useState("");
  const [snackSodium, setsnackSodium] = useState("");
  const [snackSugar, setsnackSugar] = useState("");
  let history = useHistory();

  const onsnackNameHandler = (event) => {
    setsnackName(event.currentTarget.value);
    //console.log("name = ",(event.currentTarget.value));
  };
  const onsnackAmountHandler = (event) => {
    setsnackAmount(event.currentTarget.value);
  };
  const onsnackCaloriesHandler = (event) => {
    setsnackCalories(event.currentTarget.value);
  };
  const onsnackCarboHandler = (event) => {
    setsnackCarbo(event.currentTarget.value);
  };
  const onsnackCholHandler = (event) => {
    setsnackChol(event.currentTarget.value);
  };
  const onsnackFatHandler = (event) => {
    setsnackFat(event.currentTarget.value);
  };
  const onsnackProteinHandler = (event) => {
    setsnackProtein(event.currentTarget.value);
  };
  const onsnackSodiumHandler = (event) => {
    setsnackSodium(event.currentTarget.value);
  };
  const onsnackSugarHandler = (event) => {
    setsnackSugar(event.currentTarget.value);
  };
  //var formData = new FormData(document.getElementsByClassName("SelectBox1"));

  const onClick = () => {
    let form = new FormData();

    form.append("asparm", asparm);
    form.append("swelling", swelling);
    form.append("atfat", atfat);
    form.append("atsugar", atsugar);
    form.append("sulfite", sulfite);
    form.append("atsodium", atsodium);
    form.append("color", color);
    form.append("msg", MSG);
    form.append("fish", fish);
    form.append("fork", fork);
    form.append("soft", soft);
    form.append("milk", milk);
    form.append("bean", bean);
    form.append("wheat", wheat);
    form.append("egg", egg);
    form.append("crispy", crispy);
    form.append("flat", flat);
    form.append("sour", sour);
    form.append("salty", salty);
    form.append("sweet", sweet);
    form.append("spicy", spicy);
    form.append("oily", oily);
    form.append("category", cate);
    form.append("file", images);
    form.append("favorite", 0);
    form.append("amount", snackAmount);
    form.append("carbo", snackCarbo);
    form.append("sugar", snackSugar);
    form.append("chol", snackChol);
    form.append("calories", snackCalories);
    form.append("fat", snackFat);
    form.append("protein", snackProtein);
    form.append("sodium", snackSodium);
    form.append("snackName", snackName);

    axios({
      method: "POST",
      url: "http://localhost:8080/snack/regist",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);

        alert("과자를 등록했습니다");
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="RegisterMain">
      <div className="RegisterTitle">
        <img src={colorLogo} alt="nav-logo" className="color-logo" />
        New Snack
      </div>
      <div className="RegisterImage">
        {/* <img src={Register_Image} alt="nav-logo" className="Register_Image" /> */}
        <SnackUploadImg></SnackUploadImg>
        {/* <p className="RegisterImgae_Text">IMG</p> */}
        {/* <input ref={Register_Image} type='file' className="Imageinputbtn" ></input> */}
        {/* <div style={{"backgroundColor": "#efefef", "width":"150px", "height" : "150px"}}>
      </div> */}
        {/* <div>
        <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile}/>
      </div> */}
      </div>
      <div className="Register_data">
        <div className="Register_Name">
          NAME
          <input
            type="text"
            className="Register_Name_text"
            value={snackName}
            onChange={onsnackNameHandler}
          ></input>
        </div>
        <div className="Register_Category">
          CATEGORY
          <Select
            defaultValue="선택해주세요"
            style={{ width: 200, background: "yellow" }}
            onChange={handleChange}
            className="SelectBox1"
          >
            <Option value="income">수입제과</Option>
            <Option value="icecream">아이스크림</Option>
            <Option value="cookie">과자 / 쿠키</Option>
            <Option value="chocolate">초콜릿 / 캔디</Option>
          </Select>
        </div>
        <div className="Register_Tag">
          <SnackTag />
        </div>
        {/* SelectData 끝 */}
      </div>
      {/* <div className="Register_Intro">
          <SnackIntro/>
        </div> */}
      <div className="Information">
        <div className="Nutrition_Title">
          <p className="Nu_Title">영양정보</p>
          <div className="Nutrition_register">
            <div className="mtitle">
              <div class="ntitle">총량</div>
              <input
                type="text"
                className="Amount"
                value={snackAmount}
                onChange={onsnackAmountHandler}
              ></input>
            </div>
            <div className="mtitle">
              <div class="ntitle"> 칼로리</div>
              <input
                type="text"
                className="Calories"
                value={snackCalories}
                onChange={onsnackCaloriesHandler}
              ></input>
            </div>
            <div className="mtitle">
              <div class="ntitle">탄수화물</div>
              <input
                type="text"
                className="Carbo"
                value={snackCarbo}
                onChange={onsnackCarboHandler}
              ></input>
            </div>
            <div className="mtitle">
              <div class="ntitle">콜레스테롤</div>
              <input
                type="text"
                className="Chol"
                value={snackChol}
                onChange={onsnackCholHandler}
              ></input>
            </div>
            <div className="mtitle">
              <div class="ntitle">지방</div>
              <input
                type="text"
                className="Fat"
                value={snackFat}
                onChange={onsnackFatHandler}
              ></input>
            </div>
            <div className="mtitle">
              <div class="ntitle">단백질</div>
              <input
                type="text"
                className="Protein"
                value={snackProtein}
                onChange={onsnackProteinHandler}
              ></input>
            </div>
            <div className="mtitle">
              <div class="ntitle">나트륨</div>
              <input
                type="text"
                className="Sodium"
                value={snackSodium}
                onChange={onsnackSodiumHandler}
              ></input>
            </div>
            <div className="mtitle">
              <div class="ntitle">당</div>
              <input
                type="text"
                className="Suger"
                value={snackSugar}
                onChange={onsnackSugarHandler}
              ></input>
            </div>
          </div>
        </div>
        <div className="Allergy">
          {/* <SnackAllergyCheck/> */}

          <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
            <div className="checkbox1">
              <p className="checkboxtitle">알레르기</p>
              <Col span={8}>
                <Checkbox value="A" className="checkbox_1">
                  <p className="checkindex">콩</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B" className="checkbox_1">
                  <p className="checkindex">우유</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C" className="checkbox_1">
                  <p className="checkindex">계란</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D" className="checkbox_1">
                  <p className="checkindex">생선</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E" className="checkbox_1">
                  <p className="checkindex">돼지고기</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="F" className="checkbox_1">
                  <p className="checkindex">밀</p>
                </Checkbox>
              </Col>
            </div>
          </Checkbox.Group>
        </div>
        <div className="attention_nu">
          {/* <SnackAllergyCheck/> */}

          <Checkbox.Group style={{ width: "100%" }} onChange={onChange1}>
            <div className="checkbox2">
              <p className="checkboxtitle2">주의성분</p>
              <Col span={8}>
                <Checkbox value="A1" className="checkbox_2">
                  <p className="checkindex2">MSG</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B1" className="checkbox_2">
                  <p className="checkindex2">합성착생료</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C1" className="checkbox_2">
                  <p className="checkindex2">차아황산나트륨</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D1" className="checkbox_2">
                  <p className="checkindex2">아황산염</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E1" className="checkbox_2">
                  <p className="checkindex2">설탕</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="F1" className="checkbox_2">
                  <p className="checkindex2">포화지방</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="G1" className="checkbox_2">
                  <p className="checkindex2">팽창제</p>
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="H1" className="checkbox_2">
                  <p className="checkindex2">아스파탐</p>
                </Checkbox>
              </Col>
            </div>
          </Checkbox.Group>
        </div>
      </div>
      <div className="Confirm">
        <button className="Confirmbtn" onClick={onClick}>
          등록
        </button>
      </div>
    </div>
  );
};
//ReactDOM.render(<App />, document.getElementById('container'));

export default SnackRegister;
