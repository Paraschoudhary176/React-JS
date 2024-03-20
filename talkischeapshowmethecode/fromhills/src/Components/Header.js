import React from "react";
export const Header = () => {
  return (
    <div className="header">
      <div
        className="logo-container"
        style={{
        //   display: "flex",
            // alignItems: "center",
        }}
      >
        <div
          style={{
            // flexDirection: "row",
            // justifyContent: "flex-end",
            background: "green",
          }}
        >
          <img
            className="logo"
            src="https://content.jdmagicbox.com/comp/kullu/w9/9999p1902.1902.220629120511.z2w9/catalogue/-9azvsizdv8.jpg?clr=4f4f17"
            style={{ height: 120, borderRadius: 10 }}
          />
        </div>
        <div
          className="navlist"
          style={{
            justifyContent: "space-between",
            // display: "flex",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <a href="#about">Home</a>
          <a href="#skills">About</a>
          <a href="#projects">Cart</a>
          <a href="#projects">Contact Us</a>
        </div>
      </div>
      <h2>Welcome to our website!</h2>
    </div>
  );
};
