import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";


const Test=()=>{
const [data, setData] = useState({})
useEffect(()=>{
    fetch("http://localhost:5170/home").then(res => res.json()).then(data => setData(data))
}, [])

return(
    <>
    {/* <Navbar/> */}
    <div>{data.name}</div>
    <div>{data.age}</div>
    </>
)

}

export default Test;