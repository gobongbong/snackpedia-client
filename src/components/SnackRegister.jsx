import React, { Component, ReactDOM, useState, useEffect } from "react";
import axios from "axios";
import colorLogo from "../images/color_snack.png";
import SnackTag from "./SnackTag";
//import SnackAllergyCheck from "./SnackAllergyCheck";
import SnackIntro from "./SnackIntro";
import "antd/dist/antd.css";
import Register_Image from "../images/Register_Image.png";
import "../css/SnackRegister.scss";
import { Select } from "antd";
import { Checkbox, Row, Col } from "antd";
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}
const SnackRegister = () => {
  const [snackName, setsnackName] = useState("");

  const onsnackNameHandler = (event) => {
    setsnackName(event.currentTarget.value);
  };

  //var formData = new FormData(document.getElementsByClassName("SelectBox1"));

  // const onClick = () => {
  //   axios({
  //     method: "POST",
  //     url: "http://localhost:8080/signup",
  //     data: {
  //       snackName: snackName.value,
  //       formData

  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="RegisterMain">
      <div className="RegisterTitle">
        <img src={colorLogo} alt="nav-logo" className="color-logo" />
        New Snack
      </div>
      <div className="RegisterImage">
        <img src={Register_Image} alt="nav-logo" className="Register_Image" />
        <p className="RegisterImgae_Text">IMG</p>
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
            defaultValue="snackdefalut"
            style={{ width: 200, background: "yellow" }}
            onChange={handleChange}
            className="SelectBox1"
          >
            <Option value="snackdefalut">수입제과</Option>
            <Option value="icecream">아이스크림</Option>
            <Option value="snackcookie">과자 / 쿠키</Option>
            <Option value="chococandy">초콜릿 / 캔디</Option>
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
            <div class="ntitle">총량<input type="text"className="Amount"></input></div></div>
            <div className="mtitle">
            <div class="ntitle"> 칼로리<input type="text" className="Calories"></input></div></div>
            <div className="mtitle">
            <div class="ntitle">탄수화물<input type="text" className="Carbo"></input></div></div>
            <div className="mtitle">
            <div class="ntitle">콜레스테롤<input type="text" className="Chol"></input></div></div>
            <div className="mtitle">
            <div class="ntitle">지방<input type="text" className="Fat"></input></div></div>
            <div className="mtitle">
            <div class="ntitle">단백질<input type="text" className="Protein"></input></div></div>
            <div className="mtitle">
            <div class="ntitle">나트륨<input type="text" className="Sodium"></input></div></div>
            <div className="mtitle">
            <div class="ntitle">당<input type="text" className="Suger"></input></div></div>
          </div>
        </div>
        <div className="Allergy">
          {/* <SnackAllergyCheck/> */}
          <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
            <Row>
              <Col span={8}>
                <Checkbox value="A">A</Checkbox>
              </Col>
              <Col span={8}>

                <Checkbox value="B">B</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C">C</Checkbox>
              </Col>
              <Col span={8}> 
                <Checkbox value="D">D</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E">E</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </div>
      </div>
      <div className="Confirm">
        <button className="Confirmbtn"
          //onClick={onClick}
        > 
          등록
        </button>
      </div>
    </div>
  );
};
//ReactDOM.render(<App />, document.getElementById('container'));

export default SnackRegister;
