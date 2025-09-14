import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams();
    // console.log(userid);
    return <div className="bg-amber-100 text-black text-3xl p-4 text-center">User : {userid}</div>;
}

export default User;