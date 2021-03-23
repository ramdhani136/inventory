import React from "react";
import { Listmenu } from "../../components";
import "./home.scss";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import NoteIcon from '@material-ui/icons/Note';
import WorkIcon from '@material-ui/icons/Work';
import AssessmentIcon from '@material-ui/icons/Assessment';
import HistoryIcon from '@material-ui/icons/History';

const Home = () => {
    return (
        <div className="home">
            <p>MODULES</p>
                <Listmenu nama="Buat Notulen" Icon={NoteAddIcon} />
                <Listmenu nama="List Notulen" Icon={NoteIcon} />
                <Listmenu nama="List Tugas" Icon={WorkIcon} />
                <Listmenu nama="Laporan" Icon={AssessmentIcon} />
                <Listmenu nama="History" Icon={HistoryIcon} />
        </div>
    );
};

export default Home;
