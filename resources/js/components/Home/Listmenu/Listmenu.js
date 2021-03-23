import React from 'react';
import './listmenu.scss';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Listmenu = ({nama,link,Icon}) => {
    return (
        <div className="listmenu">
            <Icon className="listmenu__icon"/>
            <a>{nama}</a>
            <KeyboardArrowDownIcon className="listmenu_caret"/>
        </div>
    )
}

export default Listmenu
