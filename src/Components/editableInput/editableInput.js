import React from 'react';
import Aux from './../../HOC Components/Auxillary';
import BackDrop from './../Backdrop/Backdrop';

import classes from './editableInput.css';

const EditableInput = (props) =>{
    let show = (<div className={classes.data}>
                    <p style={{textAlign: "left"}}>{props.value}</p>
                    <i style={{cursor: "pointer"}} onClick={props.toogleEditing} classvalue="fas fa-pencil-alt">Edit</i>
                </div>);
    if(props.editingMode){
        show = (<div className={classes.data}>
                    <BackDrop toogleEditing={props.toogleEditing} cancelUpdate={props.cancelChange} show={true}/>
                    <input onChange={(e)=>{props.changehandler(e);}} placeholder={props.value} value={props.value} />
                    <i style={{cursor: "pointer"}} onClick={()=>{;props.toogleEditing();props.updateValue()}} className="glyphicon glyphicon-ok">Done</i>
                </div>);
    }
    return(
        <Aux>
            <h4 className={classes.title}>{props.title}</h4>
            {show}
        </Aux>
    );
};

export default EditableInput;