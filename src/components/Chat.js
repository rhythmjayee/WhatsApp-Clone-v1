import {Avatar, IconButton } from '@material-ui/core';
import { AttachFile,MoreVert,SearchOutlined,InsertEmoticon} from '@material-ui/icons';
import React,{useState} from 'react';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css';
import axios from '../axios';
function Chat({messages}) {
  const [input, setInput] = useState("");
  const sendMessage=async(e)=>{
    e.preventDefault();
    await axios.post('/message/new',{
      name:"rhythm",
      message:input,
      timestamp:new Date().toISOString,
      received:true
    });
    setInput("");
  }
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
           {messages.map((message)=>(
            <p key={message._id} className={`chat__message ${message.received && "chat__reciever"}`}>
              <span className="chat__name">{message.name}</span>
              {message.message}
              <span className="chat__timestamp">{message.timestamp}</span>
              </p> 
           ))}
             
              {/* <p className="chat__message chat__reciever">
              <span className="chat__name">Rhythm</span>
              Message
              <span className="chat__timestamp">{new Date().toUTCString()}</span>
              </p>                */}
           </div>
           <div className="chat__footer">
            <InsertEmoticon/>
            <form>
                <input value={input} onChange={e=>setInput(e.target.value)} placeholder="type a mesage" type="text"/>
                
                {/* <IconButton> */}
                <button onClick={sendMessage} type="submit">Send a message
                {/* <SendIcon/> */}
                </button>
                {/* </IconButton> */}
            </form>
            <MicIcon/>
           </div>
        </div>
    )
}

export default Chat;
