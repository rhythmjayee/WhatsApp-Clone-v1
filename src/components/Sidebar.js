import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLargeRounded';
import './Sidebar.css';
import {Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchOutlined from '@material-ui/icons/SearchOutlined'
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div
        className="sidebar">
            <div className="sidebar__header">
            <Avatar src="https://instagram.fluh1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75294877_593614034708792_4229953375313068032_n.jpg?_nc_ht=instagram.fluh1-1.fna.fbcdn.net&_nc_ohc=rjqy9e7e4MsAX-qcs6y&oh=2dfb4638600830e1334f5ff2942ad2d5&oe=5F9556B7"/>
                <div className="sidebar__headerRight">
                <IconButton>
                  <DonutLargeIcon/>
                </IconButton> 
                <IconButton>
                  <ChatIcon/>
                </IconButton> 
                <IconButton>
                  <MoreVertIcon/>
                </IconButton>  
                </div>
            </div>
            <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                  <SearchOutlined/>
                  <input placeholder="Search or start new chat" type="text"/>
              </div>  
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>

            </div>
        </div>
    )
}

export default Sidebar;
