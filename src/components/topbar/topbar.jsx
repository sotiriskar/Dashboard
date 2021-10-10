import React from 'react';
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                        <span className="logo">Dashboard</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}