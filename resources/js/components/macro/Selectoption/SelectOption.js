import React from "react";
import "./SelectOption.scss";

const SelectOption = ({ nama, data, handle ,value}) => {
    return (
        <div className="selectoption">
            <label>{nama}</label>
            <select onChange={(e) => handle(e.target.value)}
            value={value}>
                {data.map((item,index)=>(
                    <option key={index}>{item.status}</option>
                ))}
            </select>
        </div>
    );
};

export default SelectOption;
