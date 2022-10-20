import React, { useEffect } from "react";
import "./about.css";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useLocation } from "react-router-dom";

const About = () => {
  const { hash } = useLocation();
  const id = hash.replace("#", "");

  useEffect(() => {
    document.getElementById(id)?.scrollIntoView();
  }, [id]);

  return (
    <div className="About">
      <div className="content-1">
        <div>
          <h1 className="title-gradient">Fruityvice</h1>
          <p className="text-1 grey-text">
            {/* A powerful webservice which provides data for all kinds of fruit!
            You can use Fruityvice to find out interesting information about
            fruit and educate yourself. The webservice is completely free to use
            and contribute to. */}
            Fruityvice is our collaborative project which we worked on.It
            display's interesting facts about every fruit in details such as it
            shows about its family the amount of calories, fat and sugar
            contents
          </p>
        </div>
        <div>
          <img
            className="img-content-1"
            src="https://images.unsplash.com/photo-1523472721958-978152f4d69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.png"
            alt="sliced citrus fruits"
          />
        </div>
      </div>
      <div className="content-2">
        <div>
          <img
            className="img-content-2"
            src="https://images.unsplash.com/photo-1521997888043-aa9c827744f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80.jpg"
            alt="avocado cut in half"
          />
        </div>
        <div className="text-1">
          <h1 className="title-gradient">What function does it do?</h1>
          <p className="grey-text">
            {/* With Fruityvice you can receive interesting data from any fruit of
            your choosing. On top of that you can add fruits by yourself as
            well! Added fruits will first have to be approved by an admin to
            avoid any errors in the data. The shown data is based on 100 grams
            of the listed fruit. The owner does not guarantee the available data
            is 100% flawless, however he will do his best to fix any wrong data. */}
            We used FruityVice API to get the data from its server and created a
            proxy server on our backend which will get data from the fruiyvice
            API and post's the data to our local host which will then display on
            our app.
          </p>
        </div>
      </div>
      <div className="team">
        <h1 className="meet-team-title" id="team" href="#team">
          Meet Our Team
        </h1>
      </div>
      <div className="cards">
        <div className="cardItem">
          <img
            alt="Team member"
            className="profile-image"
            src="https://ca.slack-edge.com/T03L8Q5BHT7-U03M72CCQGG-c81a804d71b7-512"
          ></img>
          <div className="card-content">
            <h2>Bharadwaj Kuna</h2>
            <p>
              "I'm a Aspiring FrontEnd Web developer I always feel like My code
              DOESN’T work, I have no idea why. My code WORKS, I have no idea
              why."
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
        </div>
        <div className="cardItem">
          <img
            alt="Team member"
            className="profile-image"
            src="https://ca.slack-edge.com/T03L8Q5BHT7-U03NRBXU0KX-2fb88b795958-512"
          ></img>
          <div className="card-content">
            <h2>Idiris Omer</h2>
            <p>
              Front End Developer - HTML, CSS, JS & REACT | Mostly Frontend -
              Exploring Backend
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
        </div>
        <div className="cardItem">
          <img
            alt="Team member"
            className="profile-image"
            src=" https://ca.slack-edge.com/T03L8Q5BHT7-U03LEBUBF37-6c85e9e1c6cc-512"
          ></img>
          <div className="card-content">
            <h2>Emmanuel Oloke</h2>
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
                href="https://twitter.com/I_am_Pope"
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
        </div>
      </div>
    </div>
  );
};

export default About;
