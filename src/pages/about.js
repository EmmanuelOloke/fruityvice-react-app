import React from "react";
import "./about.css";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const About = () => {
  return (
    <div>
      <div className="content">
        <div className="title">
          <h1>Fruityvice</h1>
          <p className="text-1">
            A powerful webservice which provides data for all kinds of fruit!
            You can use Fruityvice to find out interesting information about
            fruit and educate yourself. The webservice is completely free to use
            and contribute to.
          </p>
        </div>
        <div>
          <iframe
            src="https://giphy.com/embed/3oriO7kxt2XNqbSVeU"
            width="480"
            height="480"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="content-2">
        <iframe
          src="https://giphy.com/embed/BiR9oszCT9ojhtY3JR"
          width="480"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <div className="text-1">
          <h1>What function does it do?</h1>
          <p>
            With Fruityvice you can receive interesting data from any fruit of
            your choosing. On top of that you can add fruits by yourself as
            well! Added fruits will first have to be approved by an admin to
            avoid any errors in the data. The shown data is based on 100 grams
            of the listed fruit. The owner does not guarantee the available data
            is 100% flawless, however he will do his best to fix any wrong data.
          </p>
        </div>
      </div>
      <div className="team">
        <h1>Meet our team</h1>
      </div>
      <div className="cards">
        <div className="cardItem">
          <img src="https://ca.slack-edge.com/T03L8Q5BHT7-U03M72CCQGG-c81a804d71b7-512"></img>
          <h2>Bharadwaj Kuna</h2>
          <p>
            "I'm a Aspiring FrontEnd Web developer I always feel like My code
            DOESN’T work, I have no idea why. My code WORKS, I have no idea why."
          </p>
          <div className="icons">
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/bharadwaj-swamy-9502704569/"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/kuna_swamy"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/Kunabharadwaj"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </div>
        <div className="cardItem">
          <img src="https://ca.slack-edge.com/T03L8Q5BHT7-U03NRBXU0KX-2fb88b795958-512"></img>
          <h2>Idiris </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. 
          </p>
          <div className="icons">
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/idiris-omer/"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/Idiris_codes"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/Faopaw"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </div>
        <div className="cardItem">
          <img src=" https://ca.slack-edge.com/T03L8Q5BHT7-U03LEBUBF37-6c85e9e1c6cc-512"></img>
          <h2>Emmanuel oloke</h2>
          <p>
            “Software Engineer from Nigeria with a passion for bringing
            beautiful UI designs to life and making them functional”
          </p>
          <div className="icons">
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/emmanuel-oloke/"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
            <MDBBtn
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://www.github.com/EmmanuelOloke"
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
