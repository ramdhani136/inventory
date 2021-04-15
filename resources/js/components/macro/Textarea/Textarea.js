import React, { useEffect, useRef } from "react";
import "./Textarea.scss";

const Textarea = ({ nama, handle, value, disabled }) => {
    const textRef = useRef();

    useEffect(() => {
        textRef.current.disabled =disabled;
    }, [disabled]);

    return (
        <React.Fragment>
            <div className="textarea">
                <label>{nama}</label>
                <textarea
                    ref={textRef}
                    value={value}
                    onChange={(e) => handle(e.target.value)}
                ></textarea>
            </div>
        </React.Fragment>
    );
};

export default Textarea;
