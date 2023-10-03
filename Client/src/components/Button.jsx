import React from "react";
const Button=(props)=>{
return(

    <button className="bg-blue-600 text-white  py-2 px-6 rounded md:ml-8 hover:bg-blue-200 duration-500 font-sans">
{props.children}
    </button>
)
}
export default Button;