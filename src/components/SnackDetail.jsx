import React, { Component } from "react";
import "../css/MyDetail.css";
import { Radar } from "react-chartjs-2";
import Masonry from "react-masonry-css";

import Comment from "./Comment";
import axios from "axios";
import Content from "./Content";

class SnackDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
      allComment: [],
      breakpointColumnsObj: {
        default: 4,
        1660: 4,
        1310: 4,
        1025: 3,
      },
      radarData: {
        labels: ["재구매", "포만감", "맛", "가성비", "창의성"],
        datasets: [
          {
            label: "과자 점수",
            backgroundColor: "rgba(248, 18, 18, 0.5)",
            fill: true,
            radius: 10,
            pointHoverRadius: 2,
            data: [
              this.props.location.state.snack.flavor,
              this.props.location.state.snack.creativity,
              this.props.location.state.snack.costPerformance,
              this.props.location.state.snack.satiety,
              this.props.location.state.snack.repurchase,
            ],
          },
        ],
      },
    };

    this.onAllComments = this.onAllComments.bind(this);
  }

  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push("/");
    }

    // 처음 과자 댓글 들고오기
    axios
      .get(`http://localhost:8080/comment/${this.props.location.state.id}`)
      .then((res) => {
        this.setState({ comment: res.data.comment });

        this.setState({
          allComment: res.data.map((comment) => {
            return (
              <Comment
                id={comment.id}
                key={comment.id}
                userName={comment.userName}
                content={comment.content}
              />
            );
          }),
        });
      });
  }

  onAllComments(comment) {
    const { allComment } = this.state;

    this.setState({
      allComment: [
        ...allComment,
        <Comment
          id={comment.id}
          key={comment.id}
          userName={comment.userName}
          content={comment.content}
        />,
      ],
    });
  }

  render() {
    const { state } = this.props.location;
    let hasAllergies = [];
    let hasCautions = [];
    let hasTags = [];

    console.log(state.snack);

    let allergies = {
      bean: state.snack.bean,
      milk: state.snack.milk,
      egg: state.snack.egg,
      fish: state.snack.fish,
      fork: state.snack.fork,
      wheat: state.snack.wheat,
    };

    let cautions = {
      msg: state.snack.msg,
      color: state.snack.color,
      atsodium: state.snack.atsodium,
      sulfite: state.snack.sulfite,
      atsugar: state.snack.atsugar,
      atfat: state.snack.atfat,
      swelling: state.snack.swelling,
      asparm: state.snack.asparm,
    };

    let tags = {
      crispy: state.snack.crispy,
      soft: state.snack.soft,
      spicy: state.snack.spicy,
      oily: state.snack.oily,
      sweet: state.snack.sweet,
      sour: state.snack.sour,
      flat: state.snack.flat,
      salty: state.snack.salty,
    };

    for (const tag in tags) {
      if (tags[tag] === "1") {
        if (tag === "crispy") {
          hasTags.push("#바삭함");
        } else if (tag === "soft") {
          hasTags.push("#순한맛");
        } else if (tag === "spicy") {
          hasTags.push("#매운맛");
        } else if (tag === "oily") {
          hasTags.push("#촉촉함");
        } else if (tag === "sweet") {
          hasTags.push("#달콤함");
        } else if (tag === "sour") {
          hasTags.push("#싱거움");
        } else if (tag === "flat") {
          hasTags.push("#바삭함");
        } else if (tag === "salty") {
          hasTags.push("#짭짤함");
        }
      }
    }

    for (const allegy in allergies) {
      if (allergies[allegy] === "1") {
        if (allegy === "bean") {
          hasAllergies.push("🥜(콩)");
        } else if (allegy === "milk") {
          hasAllergies.push("🥛(우유)");
        } else if (allegy === "egg") {
          hasAllergies.push("🥚(달걀)");
        } else if (allegy === "fish") {
          hasAllergies.push("🐟(생선)");
        } else if (allegy === "fork") {
          hasAllergies.push("🐖(돼지고기)");
        } else if (allegy === "wheat") {
          hasAllergies.push("🌿(밀)");
        }
      }
    }

    for (const caution in cautions) {
      if (cautions[caution] === "1") {
        if (caution === "msg") {
          hasCautions.push("MSG");
        } else if (caution === "color") {
          hasCautions.push("합성착색료");
        } else if (caution === "atsodium") {
          hasCautions.push("차아황산나트륨");
        } else if (caution === "sulfite") {
          hasCautions.push("아황산염");
        } else if (caution === "atsugar") {
          hasCautions.push("설탕");
        } else if (caution === "atfat") {
          hasCautions.push("포화지방");
        } else if (caution === "swelling") {
          hasCautions.push("팽창제");
        } else if (caution === "asparm") {
          hasCautions.push("아스파탐");
        }
      }
    }

    if (state === undefined) {
      return null;
    } else {
      return (
        <div className="detail">
          <h1>
            {state.snack.category === "snackcookie"
              ? "과자 / 쿠키"
              : state.snack.category === "income"
              ? "수입제과"
              : state.snack.category === "icecream"
              ? "아이스크림"
              : "초콜릿 / 캔디"}
          </h1>
          <hr />
          <div className="detail-main">
            <div className="detail-main-img-div">
              <img
                id={state.id}
                src={`http://localhost:3000/images/${state.path}`}
                alt="snack"
              />
            </div>

            <div className="detail-main-info-div">
              <h2>{state.snack.snackName}</h2>
              <hr />
              <div className="detail-main-info-tag">
                {hasTags.map((tag, idx) => {
                  return (
                    <div key={idx} className="tag">
                      {tag}
                    </div>
                  );
                })}
              </div>
              <Radar
                options={{
                  scale: {
                    gridLines: {
                      color: "#rgba(255, 60, 0, 0.1)",
                      lineWidth: 2,
                    },
                    angleLines: {
                      display: false,
                    },
                    ticks: {
                      beginAtZero: true,
                      min: 0,
                      max: 5,
                      stepSize: 1,
                    },
                    backgroundColor: "rgba(255, 255, 255)",
                    pointLabels: {
                      fontSize: 50,
                      fontColor: "red",
                    },
                  },
                }}
                data={this.state.radarData}
              />
            </div>
          </div>

          <div className="detail-ingredient">
            <div className="detail-ingredient-box">
              <div className="ingredient-title">알레르기</div>
              <div className="detail-ingredient-info">
                {hasAllergies.map((allegy, idx) => {
                  return <div key={idx}>{allegy}</div>;
                })}
              </div>
            </div>
            <div className="detail-ingredient-box">
              <div className="ingredient-title">영양정보</div>
              <div className="detail-ingredient-info">
                <div>총량 : {state.snack.amount} g</div>
                <div>칼로리 : {state.snack.calories} kcal</div>
                <div>탄수화물 : {state.snack.carbo} g</div>
                <div>콜레스테롤 : {state.snack.chol} g</div>
                <div>지방 : {state.snack.fat} g</div>
                <div>단백질 : {state.snack.protein} g</div>
                <div>나트륨 : {state.snack.sodium} g</div>
                <div>당 : {state.snack.suga} g</div>
              </div>
            </div>
            <div className="detail-ingredient-box">
              <div className="ingredient-title">주의성분</div>
              <div className="detail-ingredient-info">
                {hasCautions.map((caution, idx) => {
                  return <div key={idx}>{caution}</div>;
                })}
              </div>
            </div>
          </div>

          <div className="detail-comment-input">
            {/* <input
              className="commet-text"
              type="text"
              placeholder="이 과자 맛있음? 댓글 ㄱㄱ"
              value={this.state.content}
              onChange={this.onChange}
            />
            <input
              className="commet-btn"
              type="button"
              value="댓글 달기"
              onClick={this.onClick}
            /> */}
            <Content onAllComments={this.onAllComments} snackId={state.id} />
          </div>

          <div className="detail-comment-div">
            <Masonry
              breakpointCols={this.state.breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {this.state.allComment}
            </Masonry>
          </div>
        </div>
      );
    }
  }
}

export default SnackDetail;
