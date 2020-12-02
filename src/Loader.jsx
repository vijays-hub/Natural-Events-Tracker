import React from "react";

function Loader() {
  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={divStyle}>
      <img
        src="/Infinity-4.5s-191px.gif"
        alt=""
        style={{
          marginTop: "150px",
          width: "250px",
        }}
      />
    </div>
  );
}

export default Loader;
