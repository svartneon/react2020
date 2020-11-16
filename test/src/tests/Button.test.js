import React from "react";
import { cleanup, render } from "@testing-library/react";
import LanguageContext from '../components/LanguageContext.js';
import Button from '../components/Button.js';

afterEach(cleanup);

test("button enable/disable styles", () => {

    const { getByLabelText } = render(
        <LanguageContext.Provider value="en">
            <form>
                <label>
                    Enabled
          <Button disabled={false}/>
                </label>
                <label>
                    Disabled
          <Button disabled={true}/>
                </label>
                <label>
                    Visible
          <Button visibility={1}/>
                </label>
                <label>
                    Hidden
          <Button visibility={0}/>
                </label>
            </form>
        </LanguageContext.Provider>
    );

    const enabled = getByLabelText('Enabled');
    const styleEnabled = window.getComputedStyle(enabled);
    expect(styleEnabled.color).toBe('black');

    const disabled = getByLabelText('Disabled');
    const styleDisabled = window.getComputedStyle(disabled);
    expect(styleDisabled.color).toBe('GrayText');

    const visible = getByLabelText('Visible');
    const styleVisible = window.getComputedStyle(visible);
    expect(styleVisible.visibility).toBe('visible');

    const hidden = getByLabelText('Hidden');
    const styleHidden = window.getComputedStyle(hidden);
    expect(styleHidden.visibility).toBe('hidden');    
});