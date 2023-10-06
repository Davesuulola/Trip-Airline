import Logo from "../assets/Logo.png";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Login=()=>{

    return(
<>
<div className="shadow-md w-full">

<div className="md:flex items-center justify-between bg-white py-4 md:px-16 px-7">
<div className="cursor-pointer flex items-center">
            <img src={Logo} className="w-20 pt-2 mr-1" alt="" />
          </div>
</div>
</div>



<div className="w-full md:flex h-full bg-slate-100 md:px-24 py-7 md:py-10 px-7">
{/* one */}
<div className="w-full md:w-1/2 sm:px-6 h-3/4 md:border-r-2 ">
<form action="#
    ">
        
        <h1 className="text-3xl md:text-4xl font-extralight">Log in</h1>
   
<div class="">

<input type="text" id="email" class="shadow-sm mt-5 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your Email" required/>

<input type="password"  id="password" class="shadow-sm mt-5  bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your password" required/>
<p className="mt-2 ml-1">Forgotten password?</p>
<button type="submit" class="text-white bg-blue-500 hover:bg-blue-700 transition-all ease-in mt-3 duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium w-full rounded-lg text-sm px-5 py-2.5 text-center">Log In</button>

</div>
    </form>

</div>



<div  className="w-full md:w-1/2 md:text-center pt-9 md:pt-2">
<h1 className="text-3xl md:text-4xl  font-extralight sm:ml-7">Don't have an account?</h1>

<div class="">

<p className="mt-3 sm:ml-7 md:ml-7">Manage your bookings and receive our latest news and offers just for you</p>
<button type="submit" className= " text-blue-500 md:ml-7 sm:ml-7 border-blue-700 border bg-white hover:bg-blue-500 hover:text-white transition-all ease-in mt-5   duration-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium w-full sm:w-11/12 md:w-full rounded-lg text-sm px-5 py-2.5 text-center"><Link to={"/Signup"}>Create an Account</Link></button>

</div>

</div>
</div>
<Footer/>
</>
    )
}
export default Login
