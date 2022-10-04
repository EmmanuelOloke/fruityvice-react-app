import React from "react";
import "./ShowDetail.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
  const cardStyle = {
    padding: "25px",
    display: "flex",
    flexFlow: "column wrap",
  };
  const imgStyle = {
    height: "150px",
    width: "150px",
    alignSelf: "center",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <div className="body">
        <div className="card-container">
          <div style={cardStyle} className="card">
            <img
              style={imgStyle}
              src="https://svgsilh.com/svg/1349562.svg"
              alt=""
            ></img>
            <h2>
              It seems like the we couldn't find the page you were looking for.
            </h2>
            <br></br>
            <div>
            <button
              className="button-37"
              onClick={() => {
                window.history.back();
              }}
            >
              Back
            </button><button
              className="button-home"
              onClick={() => {
                navigate("/")
              }}
            >
              Home
            </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
