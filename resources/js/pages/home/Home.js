import React from "react";
import { Listmenu } from "../../components";
import "./home.scss";
import AssignmentIcon from "@material-ui/icons/Assignment";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import HistoryIcon from "@material-ui/icons/History";
import AssessmentIcon from "@material-ui/icons/Assessment";
import CategoryIcon from "@material-ui/icons/Category";
import RecentActorsIcon from "@material-ui/icons/RecentActors";

const Home = () => {
    return (
        <div className="home">
            <p>MODULES</p>
            <Listmenu nama="Daftar Asset" Icon={AssignmentIcon} />
            <Listmenu nama="Mutasi Asset" Icon={CompareArrowsIcon} />
            <Listmenu nama="Stock Opname" Icon={AssignmentTurnedInIcon} />
            <Listmenu nama="History" Icon={HistoryIcon} />
            <Listmenu nama="Laporan" Icon={AssessmentIcon} />
            <Listmenu nama="Kategori" Icon={CategoryIcon} />
            <Listmenu nama="Data Users" Icon={RecentActorsIcon} />
        </div>
    );
};

export default Home;
