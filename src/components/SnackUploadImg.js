import React, { useState } from "react";

var images = [];
function SnackUploadImg() {
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일
  const [tag, setTag] = useState([]);

  const handleChangeFile = (event) => {
    console.log(event.target.files);
    setImgFile(event.target.files);
    // fd.append("file", event.target.files);

    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]); // 1. 파일을 읽어 버퍼에 저장합니다.
        // 파일 상태 업데이트
        reader.onloadend = () => {
          // 2. 읽기가 완료되면 아래코드가 실행됩니다.
          const base64 = reader.result;
          if (base64) {
            //images.push(base64.toString())
            var base64Sub = base64.toString();

            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
            //  setImgBase64(newObj);
            // 파일 base64 상태 업데이트
            //  console.log(images)
          }
        };
      }
    }
    images = event.target.files[0];

    // console.log("경로", event.target.files[0]);

    // console.log("경로2", fd);
  };

  return (
    <div class="FlexRow_c" style={{ width: "300px" }}>
      <div class="FlexCol_c">
        {tag.map((item, index) => {
          return <span>{item}</span>;
        })}
      </div>
      <div
        className="borderBox"
        style={{
          width: "300px",
          height: "300px",
          marginTop: "60px",
          marginLeft: "60px",
          border: " 4px dashed #e94444",
          borderRadius: "2em",
        }}
      >
        <div>
          {imgBase64.map((item) => {
            return (
              <div>
                <img
                  className="d-block w-100"
                  src={item}
                  alt="First slide"
                  style={{
                    width: "300px",
                    height: "300px",
                    //height: "300px",
                    marginLeft: "-1%",
                    marginTop: "-1.2%",
                    //marginBottom: "10%",
                    border: " 4.5px dashed  #e94444",
                    borderRadius: "2em",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <input
        type="file"
        name="file"
        style={{
          display: "visible",
          float: "left",
          marginLeft: "70px",
          marginTop: "10px",
        }}
        onChange={handleChangeFile}
        className="inputbtn"
      />
    </div>
  );
}

export default SnackUploadImg;
export { images };
