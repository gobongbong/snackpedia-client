import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../css/SnackIntro.scss";
import { Tabs, Radio } from "antd";

const { TabPane } = Tabs;
var div2 = document.getElementsByClassName("ant-tabs");
var div1 = document.getElementsByClassName("ant-tabs-nav");
var div3 = document.getElementsByClassName("ant-tabs-tab");
function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < div2.length; i++) {
      div1[i].classList.remove("clicked");
      div2[i].classList.remove("clicked");
      div3[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}
function init() {
  for (var i = 0; i < div2.length; i++) {
    div1[i].addEventListener("click", handleClick);
    //div2[i].addEventListener("click", handleClick);
    div3[i].addEventListener("click", handleClick);
  }
}

class SnackIntro extends React.Component {
  state = { size: "small" };

  onChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    init();
    const { size } = this.state;
    return (
      <div className="Intro">
        <Radio.Group
          //value={size}
          onChange={this.onChange}
          style={{ marginBottom: 16 }}
        >
          {/* <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button> */}
        </Radio.Group>
        {/* <Tabs defaultActiveKey="1" size={size} style={{ marginBottom: 32 }}>
          <TabPane tab="Tab 1" key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </Tabs> */}
        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Card Tab 1" key="1">
            Content of card tab 1
          </TabPane>
          <TabPane tab="Card Tab 2" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Card Tab 3" key="3">
            Content of card tab 3
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

//ReactDOM.render(<SnackIntro />, document.getElementById("container"));
export default SnackIntro;
