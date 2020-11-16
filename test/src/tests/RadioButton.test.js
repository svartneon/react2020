import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import RadioButton from "../components/RadioButton.js";

afterEach(cleanup);

test("radiobutton", () => {
  const { getByLabelText } = render(
    <form>
      <label>
        First <RadioButton value={1} formState={{type:1}}/>
      </label>
    </form>
  );

  const radio = getByLabelText('First')
  expect(radio.value).toBe('1')
  fireEvent.change(radio, { target: { value: 2 } });
  expect(radio.value).toBe('2')
});