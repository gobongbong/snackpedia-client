import React, { useState, useEffect } from 'react';

import axios,{ post } from 'axios';
import Register_Image from "../images/Register_Image.png";
//import { Button,InputGroup ,FormControl  } from 'react-bootstrap';
//import { IoRemoveCircle } from "react-icons/io5";
import {useHistory} from "react-router-dom"
function SnackUploadImg() {
  let history = useHistory(); 
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일	
  const [tag, setTag] = useState([]);
  var images = []
  var srr;
  const handleChangeFile = (event) => {
    console.log(event.target.files)
    setImgFile(event.target.files);
    //fd.append("file", event.target.files)
    setImgBase64([]);
    for(var i=0;i<event.target.files.length;i++){
      
    if (event.target.files[i]) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
      // 파일 상태 업데이트
      reader.onloadend = () => {
        // 2. 읽기가 완료되면 아래코드가 실행됩니다.
        const base64 = reader.result;
        if (base64) {
        //  images.push(base64.toString())
        var base64Sub = base64.toString()
        console.log("경로",srr);
        setImgBase64(imgBase64 => [...imgBase64, base64Sub]);
        //  setImgBase64(newObj);
          // 파일 base64 상태 업데이트
        //  console.log(images)
        }
      }
    }
  }

  }
  // const resetTag  = () => {
  //   document.getElementById('innerinput').value = '';
  // }
  // useEffect(resetTag, [tag])

  // const setTags = (e) => {
  //   if(e.key == ' ' || e.key == 'Enter'){
  //     if(document.getElementById('innerinput').value != ''){
  //       setTag(tag => [...tag, e.target.value]);
  //     }else{
  //       alert("태그를 입력해주세요")
  //       return false;
  //     }
     
     
  //   }
  // }
  // const deleteTag = (index) => {
  //   var array = [...tag];
  //   array.splice(index, 1);
  //   setTag(array)
  // }

  // const setComments = (e) => {
  //   setComment(e.target.value)
  // }

  const WriteBoard = async()=> {
    if(imgFile == null){
      alert("이미지를 등록 해주세요");
      return false;
    }
    const fd = new FormData();
    Object.values(imgFile).forEach((file) => fd.append("file", file));
  
    // fd.append(
    //   "tag",
    // tag
    // );
    // fd.append(
    //   "comment",
    //   comment
    //);

   
    // axios(
    //   {
    //     url: '/board/WriteBoard.do',
    //     method: 'post',
    //     headers: {
    //       "Content-Type": `multipart/form-data`,
    //     },
    //     data: fd , 
    //     baseURL: 'http://localhost:8080'
    //     //withCredentials: true,
    //   }
    // ).then(function (response) {
    //  console.log(response)
    // });
    const fd2 = new FormData();
    await axios.post('http://localhost:8080/board/WriteBoard.do', fd, {
  headers: {
    "Content-Type": `multipart/form-data; `,
  }
})
.then((response) => {
   if(response.data){
    history.push("/MainBoard");
  }
})
.catch((error) => {
  // 예외 처리
})
  } 
    return (
      <div class="FlexRow_c"  style={{ width:"300px"}}>
      <div class="FlexCol_c">
       
        {/* <div  class="outer-input FlexRow_ac" style={{minHeight:'70px',width:'700px',padding:'0px',textAlign:'left',overflow:'auto', background:"red"}}> */}
        {/* <input class="innerinput" id="innerinput" style={{border:'0px',height:'30px',width:'120px',paddingLeft:'12px'}} placeholder="#tag" onKeyPress={setTags}></input> */}
          {tag.map(((item,index) => {
              return (<span>{item}</span>)
          }))}
        </div>
        {/* <textarea name="text" class="feedback-input borderBox" id="comment" placeholder="Comment" style={{resize:'none'}} onChange={setComments}></textarea> */}
        {/* <button onClick={WriteBoard} style={{border:'2px solid black',width:'700px',fontSize:'40px'}}>작성완료</button> */}
      {/* </div> */}
      {/* <label for="file" class="FlexCol_c" style={{border:'2px solid black',width:'100px',height:'100px',marginTop:'100px',fontSize:'40px'}}><strong>IMG UPLOAD </strong></label> */}
      <div class="borderBox"  style={{width:'200px', height:"300px",marginTop:'100px',marginLeft:'60px',border:' 4px dashed #e94444',borderRadius: '2em'}}>
        
      <div>
       
      {imgBase64.map((item) => {
       return(
        <div>
        <img
          className="d-block w-100"
          src={item}
          alt="First slide"
          style={{width:"100%",height:"100%",marginTop:"40%",marginBottom:"10%"}}
        />
      
      </div>

       )
      }) }
</div>

      </div>
      <input type="file" id="file" style={{display:'visible', float:'left', marginLeft:'70px',marginTop:'10px'}} onChange={handleChangeFile} multiple="multiple" />
     
      </div>
    );
  }
  

  export default SnackUploadImg;  