//this component is to view stock. all userrs can access this

import React, { useEffect } from "react";
import "./ViewStock.css";

export default function ViewStock(props) {
  let authToken = sessionStorage.getItem("token");
  console.log("authToek in viewStock", authToken);
  const changeItem = (e) => {
    const id = e.target.dataset.id;
    console.log("dataset id", id);
    console.log(e.target);
    fetch(`http://localhost:8080/stock/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`, // Update the header format
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`Removed stock item with id ${data.car_id}`);
      });
  };

  console.log(props.currentStock);
  return (
    <div className="viewStock-main-container">
      <h2 className="heading viewStock-heading">See available stock below</h2>
      <div className="viewStock-container">
        <tbody>
          <tr>
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Item Quantity</th>
          </tr>
          {props.currentStock?.map((item) => (
            <>
              <tr>
                <td key={item._id}>{item.productID}</td>
                <td>{item.productName}</td>
                <td>{item.productQuantity}</td>
                <td></td>
              </tr>
            </>
          ))}
        </tbody>
      </div>
    </div>
  );
}

// {props.currentStock?.map((item) => {
//   <tbody>
//     <tr>
//       <th>Item ID</th>
//       <th>Item Name</th>
//       <th>Item Quantity</th>
//     </tr>
//     <tr>
//       <td>{item.productId}</td>
//       <td>{item.productName}</td>
//       <td>{item.productQuantity}</td>
//     </tr>
//   </tbody>;
// })}
