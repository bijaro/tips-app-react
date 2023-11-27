import React, { useState } from "react";

const Input = ({ text, addValue, value }) => {


    // console.log(text)
    return (
        <>
            <label htmlFor="">{text}</label>
            <div>
                
                <input
                    type="number"
                    className="border-solid border-2 border-indigo-600 p-2 rounded-xl"
                    onChange={addValue}
                    value={value}
                />
            </div>
        </>
    );
};

export default Input;
