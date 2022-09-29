import React from "react";
import "./ShowDetail.css";
import Table from "react-bootstrap/Table";

const ShowDetail = ({fruitInDetail}) => {
  console.log(fruitInDetail);
  return (
    <div className="body">
      <div className="card-container">
        <div className="card">
          <Table striped hover>
            <thead>
              <tr>
                <th className="title">Nutritional Facts</th>
                <th className="title">Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Item.name</td>
              </tr>
              <tr>
                <td>Genus</td>
                <td>Item.genus</td>
              </tr>
              <tr>
                <td>Order</td>
                <td>Item.order</td>
              </tr>
              <tr>
                <td>Family</td>
                <td>Item.family</td>
              </tr>
              <tr>
                <td>Calories</td>
                <td>Item.calories</td>
              </tr>
              <tr>
                <td>Carbohydrates</td>
                <td>Item.carbohydrates</td>
              </tr>
              <tr>
                <td>of which Sugar</td>
                <td>Item.sugar</td>
              </tr>
              <tr>
                <td>Fats</td>
                <td>Item.fats</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>Item.protein</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
