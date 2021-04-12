import React, { useEffect, useRef, useState } from "react";
import "./Input.scss";

const Input = ({ value, handle }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.disabled = value.disabled;
    }, []);

    return (
        <div className="input">
            <label>{value.nama}</label>
            <input
                ref={inputRef}
                value={value.value}
                type={value.type}
                onChange={(e) => handle(e.target.value)}
                className={value.valid ? "wajib " : ""}
            />
        </div>
    );
};

export default Input;
