// tst/SimpleComponentTest.jsx
import { Simple } from "../src/SimpleComponent";
import { render } from "@testing-library/react";
import React from "react";

describe("SimpleComponent", () => {
  it("renders", () => {
    render(<Simple />);
  });
});
