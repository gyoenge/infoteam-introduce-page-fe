import React, { useEffect } from "react";

function HomeSecTest({ moveRef }) {
  useEffect(() => {
    console.log("-------use", moveRef);
  }, []);
  return (
    <div>
      <button>-----sec4로 이동------</button>
    </div>
  );
}

export default HomeSecTest;
