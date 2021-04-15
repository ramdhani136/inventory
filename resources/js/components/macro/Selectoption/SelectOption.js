import React, { useEffect, useRef } from "react";
import "./SelectOption.scss";

const SelectOption = ({ nama, data, handle, value, disabled }) => {
    const selectRef = useRef();

    useEffect(() => {
        selectRef.current.disabled = disabled;
    }, [disabled]);

    return (
        <div className="selectoption">
            <label>{nama}</label>
            <select
                ref={selectRef}
                onChange={(e) => handle(e.target.value)}
                value={value}
            >
                {data.map((item, index) => (
                    <option key={index}>{item.status}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectOption;
