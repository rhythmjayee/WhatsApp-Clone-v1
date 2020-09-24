import {Avatar, IconButton } from '@material-ui/core';
import { AttachFile,MoreVert,SearchOutlined,InsertEmoticon} from '@material-ui/icons';
import React from 'react';
import './Chat.css';
function Chat() {
    return (
        <div className="chat">
           <div className="chat__header">
               <Avatar/>
               <div className="chat__headerInfo">
                   <h3>Room Name</h3>
                   <p>Last seen at....</p>
               </div>
               <div className="chat__headerRight">
               <IconButton>
                  <AttachFile/>
                </IconButton> 
                <IconButton>
                  <SearchOutlined/>
                </IconButton> 
                <IconButton>
                  <MoreVert/>
                </IconButton>  
               </div>
           </div>
           <div className="chat__body">
              <p className="chat__message">
              <span className="chat__name">Rhythm</span>
              Message
              <span className="chat__timestamp">{new Date().toUTCString()}</span>
              </p> 
              <p className="chat__message chat__reciever">
              <span className="chat__name">Rhythm</span>
              Message
              <span className="chat__timestamp">{new Date().toUTCString()}</span>
              </p>               
           </div>
           <div className="chat__footer">
            <InsertEmoticon/>
            <form>
                <input placeholder="type a mesage" type="text"/>
                <button type="submit">
                Send a message
                </button>
            </form>
           </div>
        </div>
    )
}

export default Chat;
