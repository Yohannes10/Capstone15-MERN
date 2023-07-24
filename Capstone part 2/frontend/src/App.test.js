import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import ViewStock from "../src/components/ViewStock";

it("renders correctly", () => {
  const tree = renderer.create(<ViewStock />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("expect this endpoint to pass", async () => {
  const data = fetch("http://localhost:8080/stock/view", {
    headers: {
      Authorization: "Bearer " + "",
    },
  });

  expect(data).toBe(data);
});
