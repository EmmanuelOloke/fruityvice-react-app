import React from "react";
import "./ShowDetail.css";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShowDetail = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fruityvice.com/api/fruit/${id}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData((current) => {
          return {
            ...response,
            nutritions: {
              ...response.nutritions,
            },
          };
        });
        if (response.error) {
          console.log("error is here!!!");

          navigate("*");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="body">
      <div className="card-container">
        <div className="card">
          <Table bordered hover>
            <thead>
              <tr>
                <th className="title">Nutritional Facts</th>
                <th className="title">Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Genus</td>
                <td>{data.genus}</td>
              </tr>
              <tr>
                <td>Order</td>
                <td>{data.order}</td>
              </tr>
              <tr>
                <td>Family</td>
                <td>{data.family}</td>
              </tr>
              <tr>
                <td>Calories</td>
                <td>{data.nutritions?.calories}kcal</td>
              </tr>
              <tr>
                <td>Carbohydrates</td>
                <td>{data.nutritions?.carbohydrates}g</td>
              </tr>
              <tr>
                <td>of which Sugar</td>
                <td>{data.nutritions?.sugar}g</td>
              </tr>
              <tr>
                <td>Fats</td>
                <td>{data.nutritions?.fat}g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>{data.nutritions?.protein}g</td>
              </tr>
            </tbody>
          </Table>
          <button
            className="button-37"
            onClick={() => {
              window.history.back();
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShowDetail;
