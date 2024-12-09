import '@testing-library/react';
import {it,expect,describe} from "vitest";
import {render ,screen} from '@testing-library/react'
import About from "../sre/Components/About";
import React from "react";
describe("About",()=>{
    it("should render the about component",()=>{
    render(<About/>);
    const aboutElement =screen.getByRole('heading',{level:1})
    expect(aboutElement).toBeInTheDocument();
    });
// Test case 2
it("should have the text about",()=>{
    render(<About/>);
    const text =screen.queryByText(/about/i)
    expect(text).toBeInTheDocument();
    });

// Test case 3
it("should have the image",()=>{
    render(<About/>);
    const image =screen.queryByAltText('devimage')
    expect(image).toHaveClass('userimage');
    });

});
