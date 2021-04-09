import React from "react";
import "./Textarea.scss";

const Textarea = ({ nama, handle, value }) => {
    return (
        <React.Fragment>
            <div className="textarea">
                <label>{nama}</label>
                <textarea value={value} onChange={(e) => handle(e.target.value)}>
                   
                </textarea>
            </div>
            
        </React.Fragment>
    );
};

export default Textarea;
