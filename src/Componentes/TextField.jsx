import React from "react";

export default function TextField(props){
    const { label, type, placeholder, required } = props;

    return (
        <div>
            <label>{label}</label>
            <br/>
            <input type={type} placeholder={placeholder} required={required} />
            <br/>
        </div>
    );
}