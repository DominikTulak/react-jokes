import React from 'react';
import {connect} from "react-redux";
import {action} from "../store";

const Greeting = props => {
    return (
        <>
            <p>{props.message}</p>
            <div><button onClick={()=>{props.action()}}>Random joke</button></div>
        </>
    ); 
    
}

export default connect(state => {return {message: state.message}}, {action: action})(Greeting);