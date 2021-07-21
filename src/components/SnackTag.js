import React from "react";
import "antd/dist/antd.css";
import { Tag } from "antd";
import "../css/SnackTag.scss";
const { CheckableTag } = Tag;
var i=0;
var oily=0,
spicy=0,
sweet=0,
salty=0,
sour=0,
flat=0,
crispy=0,
soft=0;
var oilych=0,
spicych=0,
sweetch=0,
saltych=0,
sourch=0,
flatch=0,
crispych=0,
softch=0;
const tagsData = ["#바삭함", "#매운맛", "#달콤함", "#건조함"];
const tagsData1 = ["#순한맛", "#촉촉함", "#싱거움", "#소금맛"];
class SnackTag extends React.Component {
  state = {
    selectedTags: ["Books"]
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = selectedTags.length<5?
    (checked
    ? [...selectedTags, tag]
    : selectedTags.filter((t) => t !== tag)):(checked
    ? selectedTags
    : selectedTags.filter((t) => t !== tag))
    // const nextSelectedTags = checked
    //   ? [...selectedTags, tag]
    //   : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    // if(checked==1)
    // {
    //   const nextSelectedTags=[...selectedTags, tag];
    // }
    // else{
    //   constnextSelectedTags=selectedTags.filter((t) => t !== tag);
    // }
    console.log("checked = ", nextSelectedTags); 
    this.setState({ selectedTags: nextSelectedTags });
    for(i=0;i<nextSelectedTags.length;i++)
{ //console.log("checked = ", i); 
  if(nextSelectedTags[i]==="#촉촉함")
  {
    oilych=1;
   }
   if(nextSelectedTags[i]==="#매운맛")
   {
    spicych=1;
    }
    if(nextSelectedTags[i]==="#달콤함")
    {
      sweetch=1;
     }
      if(nextSelectedTags[i]==="#소금맛")
  {
    saltych=1;
   }
   if(nextSelectedTags[i]==="#싱거움")
   {
    sourch=1;
    }
    if(nextSelectedTags[i]==="#건조함")
    {
      flatch=1;
     }
     if(nextSelectedTags[i]==="#바삭함")
    {
      crispych=1;
     }
     if(nextSelectedTags[i]==="#순한맛")
    {
      softch=1;
     }
  
  }

  
if(oilych===1)
{
  oily=1;
  oilych=0;
}
else if(oilych===0)
{
  oily=0;
}
if(spicych===1)
{
  spicy=1;
  spicych=0;
}
else if(spicych===0)
{
  spicy=0;
}
if(sweetch===1)
{
  sweet=1;
  sweetch=0;
}
else if(sweetch===0)
{
  sweet=0;
}
if(saltych===1)
{
  salty=1;
  saltych=0;
}
else if(saltych===0)
{
  salty=0;
}
if(sourch===1)
{
  sour=1;
  sourch=0;
}
else if(sourch===0)
{
  sour=0;
}
if(flatch===1)
{
  flat=1;
  flatch=0;
}
else if(flatch===0)
{
  flat=0;
}
if(crispych===1)
{
  crispy=1;
  crispych=0;
}
else if(crispych===0)
{
  crispy=0;
}
if(softch===1)
{
  soft=1;
  softch=0;
}
else if(softch===0)
{
  soft=0;
}
  // console.log("flavorch = ",oilych,
  // spicych,
  // sweetch,
  // saltych,
  // sourch,
  // flatch,
  // crispych,
  // softch);
  // console.log("testflavor = ",oily,
  // spicy,
  // sweet,
  // salty,
  // sour,
  // flat,
  // crispy,
  // soft);
  
  }
  
  render() {
    const { selectedTags } = this.state;
    return (
      <div className="Tag_whole">
        <span style={{ marginRight: 8 }} className="Tag_setup">
          <p className="TagName">TAGS</p>
        </span>
        {/* {selectedTags.length } */}

        <div className="test1">
          {/* 나중에지우기 */}
          <div className="TagLayout">
            {tagsData.map((tag) => (
              <CheckableTag
                className="InTag1"
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={(checked) => this.handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </div>
          <div className="TagLayout1">
            {tagsData1.map((tag1) => (
              <CheckableTag
                className="InTag2"
                key={tag1}
                checked={selectedTags.indexOf(tag1) > -1}
                onChange={(checked) => this.handleChange(tag1, checked)}
              >
                {tag1}
              </CheckableTag>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default SnackTag;
export {oily,
  spicy,
  sweet,
  salty,
  sour,
  flat,
  crispy,
  soft};
//ReactDOM.render(<SnackTag />, document.getElementById("container"));
