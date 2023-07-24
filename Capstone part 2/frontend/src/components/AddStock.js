// This component is used to add stock items to the inventory. Only admins can access this feature.

import React, { useState, useEffect } from "react";
import "./AddStock.css";

export default function AddStock(props) {
  // State to hold the current stock list and the new stock item to be added
  const [currentStock, setCurrentStock] = useState([]);
  const [addStockItem, setAddStockItem] = useState({});

  // Retrieve the authentication token from the session storage
  const authToken = sessionStorage.getItem("token");

  // Handler for input changes (not used in this version)
  const changeHandler = (e) => {
    e.preventDefault();
  };

  // Fetch the current stock list from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:8080/stock/view", {
      headers: { Authorization: "Bearer " + authToken },
    })
      .then((res) => res.json())
      .then((response) => {
        // Update the current stock state with the fetched data
        setCurrentStock(response);
      });
  }, []);

  // Handler for removing an item from the stock list
  const removeItem = (e) => {
    const id = e.target.dataset.id;
    // Send a DELETE request to the server to remove the selected item
    fetch(`http://localhost:8080/stock/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-type": "application/json;",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        // Update the current stock state by removing the deleted item
        let old = [...currentStock];
        let deleteIndex = e.target.dataset.indexid;
        currentStock.splice(deleteIndex, 1);
        setCurrentStock([...currentStock]);
        alert(`Removed stock item`);
      });
  };

  // Handler for adding a new stock item to the inventory
  const addStock = () => {
    // Send a PUT request to the server to add the new stock item
    fetch("http://localhost:8080/stock/add", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authToken}`, // Update the header format
        "Content-type": "application/json",
      },
      body: JSON.stringify(addStockItem),
    })
      .then((res) => res.json())
      .then((response) => {
        // Update the current stock state with the updated stock list
        setCurrentStock(response);
      });
  };

  // Log the type of the current stock (for debugging purposes)
  console.log(typeof currentStock);

  return (
    <>
      <div className="AddStock-main-container">
        {/* Display a welcome message and the stock addition form */}
        <h2>
          Welcome, <span className="name">{props.userName}</span>. Please add
          the stock needed
        </h2>
        <div className="AddStock-container">
          <form className="AddStock-form" onSubmit={addStock}>
            {/* Input fields for item ID, name, and quantity */}
            <label>Item ID</label>
            <input
              placeholder="Add item's ID"
              onChange={(e) =>
                setAddStockItem((prevItem) => ({
                  ...prevItem,
                  pId: e.target.value,
                }))
              }
            />
            <label>Item name</label>
            <input
              placeholder="Add item's name"
              onChange={(e) =>
                setAddStockItem((prevItem) => ({
                  ...prevItem,
                  pName: e.target.value,
                }))
              }
            />
            <label>Item Quantity</label>
            <input
              placeholder="Add quantity"
              type="number"
              onChange={(e) =>
                setAddStockItem((prevItem) => ({
                  ...prevItem,
                  pQuantity: e.target.value,
                }))
              }
            />
            {/* Submit button to add the new stock item */}
            <button className="AddStock-button buttons">Submit</button>
          </form>
        </div>
      </div>
      {/* Display the current stock list in a table */}
      <div className="viewStock-container">
        <table>
          <tbody>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th>Item Quantity</th>
              <th></th>
            </tr>
            {/* Map through the current stock items and display them in the table */}
            {currentStock?.map((item, index) => (
              <>
                <tr key={index}>
                  <td>{item.productID}</td>
                  <td>{item.productName}</td>
                  <td>{item.productQuantity}</td>
                  {/* Button to remove an item from the stock */}
                  <td>
                    <button
                      className="delete-btn btn"
                      data-id={item._id}
                      data-indexid={index}
                      onClick={(e) => removeItem(e)}
                    >
                      Delete Item
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
