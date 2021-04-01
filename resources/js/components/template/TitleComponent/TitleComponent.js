import React, { useState } from "react";
import "./titlecomponent.scss";

const TitleComponent = ({ value, input, title, aksi, name }) => {

    const [search, setSearch] = useState(value);

    return (
        <div className="title">
            <div className="title_left">{title}</div>
            <div className="title_right">
                {input ? (
                    <input
                        type="text"
                        value={search}
                        placeholder="Pencarian data .."
                        onChange={(e) => setSearch(e.target.value)}
                    ></input>
                ) : null}
                <button
                    onClick={aksi}
                    className="btn-purple"
                >
                    {name}
                </button>
            </div>
        </div>
    );
};

export default TitleComponent;
