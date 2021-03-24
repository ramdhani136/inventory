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
            <Listmenu nama="Daftar Asset" link="/asset" Icon={AssignmentIcon} />
            <Listmenu nama="Mutasi Asset" link="/mutasiasset" Icon={CompareArrowsIcon} />
            <Listmenu nama="Stock Opname" link="/stockoptanme" Icon={AssignmentTurnedInIcon} />
            <Listmenu nama="History" link="/history" Icon={HistoryIcon} />
            <Listmenu nama="Laporan" link="/laporan" Icon={AssessmentIcon} />
            <Listmenu nama="Kategori" link="/kategori" Icon={CategoryIcon} />
            <Listmenu nama="Data Users" link="/users" Icon={RecentActorsIcon} />
        </div>
    );
};

export default Home;
