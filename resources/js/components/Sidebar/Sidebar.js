import React from "react";
import "./sidebar.scss";
import { Avatar } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Sidebarmenu } from "..";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HistoryIcon from "@material-ui/icons/History";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CategoryIcon from '@material-ui/icons/Category';
import RecentActorsIcon from '@material-ui/icons/RecentActors';


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
                    Icon={AssignmentIcon}
                    nama="Daftar Asset"
                    link="/notulen"
                />
                <Sidebarmenu
                    Icon={CompareArrowsIcon}
                    nama="Mutasi Asset"
                    link="/tugas"
                />
                <Sidebarmenu
                    Icon={AssignmentTurnedInIcon}
                    nama="Stock Opname"
                    link="/history"
                />
                <Sidebarmenu
                    Icon={HistoryIcon}
                    nama="History Asset"
                    link="/history"
                />
                <Sidebarmenu
                    Icon={AssessmentIcon}
                    nama="Laporan Asset"
                    link="/laporan"
                />
                 <Sidebarmenu
                    Icon={CategoryIcon}
                    nama="Kategori Asset"
                    link="/kategori"
                />
                 <Sidebarmenu
                    Icon={RecentActorsIcon}
                    nama="Data Users"
                    link="/kategori"
                />
            </div>
        </div>
    );
};

export default Sidebar;
