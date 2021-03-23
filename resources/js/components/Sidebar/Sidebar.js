import React from "react";
import "./sidebar.scss";
import { Avatar } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Sidebarmenu } from "..";
import NoteIcon from "@material-ui/icons/Note";
import WorkIcon from "@material-ui/icons/Work";
import AssessmentIcon from "@material-ui/icons/Assessment";
import HistoryIcon from "@material-ui/icons/History";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__profile">
                <Avatar
                    src="https://assets-a1.kompasiana.com/items/album/2020/07/08/zamazn-5f04cd42097f364494336094.jpg"
                    className="sidebar__avatar"
                />
                <div className="sidebar__profle_right">
                    <a>Ilham Ramdhani</a>
                    <a style={{ fontSize: "0.8em" }}>
                        <FiberManualRecordIcon className="sidebar__online" />
                        <b>Online</b>
                    </a>
                </div>
            </nav>
            <p>MAIN NAVIGATION</p>
            <div className="sidebar_menu">
                <Sidebarmenu
                    Icon={NoteIcon}
                    nama="Daftar Notulen"
                    link="/notulen"
                />
                <Sidebarmenu Icon={WorkIcon} nama="List Tugas" link="/tugas" />
                <Sidebarmenu
                    Icon={HistoryIcon}
                    nama="History"
                    link="/history"
                />
                <Sidebarmenu
                    Icon={AssessmentIcon}
                    nama="Laporan"
                    link="/laporan"
                />
            </div>
        </div>
    );
};

export default Sidebar;
