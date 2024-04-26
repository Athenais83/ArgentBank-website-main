import React from "react";
import '../sass/_nameUser.scss';


function NameUser (){
    return(
        <div className="bg-dark">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
    )
}

export default NameUser; 