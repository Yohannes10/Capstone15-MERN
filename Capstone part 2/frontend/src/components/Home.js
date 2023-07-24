import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [user, setUser] = useState({
    name: "Yohannes",
    email: "Yohannes.100@gmail.com",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="home-container container">
        <h1 className="headings company-name welcome">Tech-Han</h1>
        <span> {isLoggedIn ? `Hello, ${user.name}` : "Please log in"}</span>
        <div className="values-mission container-md">
          <div className="values">
            <h3>Our values</h3>
            <p>
              At the Inventory Management App, we are committed to
              upholding the following core values: 1. Customer-Centric Approach:
              Our customers are at the heart of everything we do. We prioritize
              their needs and strive to deliver a seamless inventory management
              solution that enhances their efficiency and productivity. 2.
              Innovation and Adaptability: We embrace innovation and continually
              seek ways to improve our app to meet the evolving needs of
              businesses. We are adaptable to changing market dynamics and
              technologies, ensuring our users stay ahead of the curve. 3.
              Simplicity and User-Friendliness: We believe in simplicity. Our
              app's user interface is designed to be intuitive and
              user-friendly, making it easy for both admins and employees to
              navigate and utilize its features effectively. 4. Security and
              Reliability: Data security is of paramount importance to us. We
              implement robust security measures to protect our users' sensitive
              information and ensure the app's reliability in managing their
              inventory. 5.Collaboration and Support: We value collaboration
              with our clients, seeking their feedback and suggestions to
              continuously improve our app. Our dedicated support team is always
              ready to assist and ensure a seamless experience.
            </p>
          </div>
          <div className="mission">
            <h3>Our mission</h3>
            <p>
              Replace manual stock tracking methods with real-time digital
              solutions, saving time and effort for businesses. Enhance customer
              service by providing quick access to inventory information,
              reducing customer wait times, and improving overall satisfaction.
              Optimize efficiency and productivity by streamlining stock
              management processes, enabling businesses to focus on core
              activities and strategic growth. Offer a user-friendly interface
              with easy-to-use features, ensuring that businesses can quickly
              adopt and benefit from our app. Foster a culture of continuous
              improvement, innovation, and customer-centricity to stay at the
              forefront of the inventory management industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
