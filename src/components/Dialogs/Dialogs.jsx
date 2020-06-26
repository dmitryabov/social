import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogMessage = (props) => {
    return (
    <div className={classes.dialog + ' ' + classes.active}>
         <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> 
    </div>
    )
}

const Message = (props) => {
    return (
    <div className={classes.message}>{props.message}</div>
    )
}

const dialogsData = [
    {id: '1', name: 'Dmitry'},
    {id: '2', name: 'Anna'}
];

const messegesData = [
    {id: '1', message: 'hi'},
    {id: '2', message: 'are'}
]

const Dialogs = () => {
    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItem} >
            <DialogMessage name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogMessage name={dialogsData[1].name} id={dialogsData[1].id}/>
            
        </div>
        <div className={classes.messages}>
            <Message message={messegesData[0].message}/>
            <Message message={messegesData[1].message}/>
        </div>
    </div>
    )
}

export default Dialogs;