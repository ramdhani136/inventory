import React from "react";
import "./Textarea.scss";

const Textarea = ({ nama, handle }) => {
    return (
        <React.Fragment>
            <div className="textarea">
                <label>{nama}</label>
                <textarea onChange={(e) => handle(e.target.value)}></textarea>
            </div>
        </React.Fragment>
    );
};

export default Textarea;
