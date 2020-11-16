import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import LanguageContext from "../components/LanguageContext.js";
import DropDownList from "../components/DropDownList.js";

afterEach(cleanup);

test("dropdown", () => {
   const options = ["male", "female"];

   function formReducer() {}

   const formState = { gender: "female" };

   const { getByLabelText } = render(
      <LanguageContext.Provider value="en">
         <form>
            <label>
               Dropdown
               <DropDownList
                  options={options}
                  onChange={(text) => (selected = text.target.value)}
                  formState={formState}
                  formReducer={formReducer}
               />
            </label>
         </form>
      </LanguageContext.Provider>
   );

   const drop = getByLabelText("Dropdown");
   expect(drop.value).toBe("female");
   fireEvent.change(drop, {
      target: { value: "male" },
   });
   expect(drop.value).toBe("male");
});
