import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import Snack from "./Snack";

function Search({ search, resetInput }) {
  // TODO 검색된 정보에 따라 페이지를 따로 구현
  const url = `http://localhost:8080/search`;

  const [searchSnack, setSearchSnack] = useState([]);

  axios({
    method: "GET",
    url,
    data: {
      search,
    },
  }).then((res) => {
    console.log(res.data);
    resetInput();
  });

  const breakpointColumnsObj = {
    default: 4,
    1660: 5,
    1310: 4,
    1025: 3,
  };

  const result = searchSnack.map((snack) => {
    return <Snack id={snack.id} key={snack.id} image={snack.snackImage} />;
  });

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {result}
      </Masonry>
    </div>
  );
}

export default Search;
