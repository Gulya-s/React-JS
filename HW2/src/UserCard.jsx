import React from "react";
import "./UserCard.css";

function UserCard({name, email}){
    return(
        <div className = "user_card">
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default UserCard;