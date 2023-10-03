import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
  <>
  <Navbar/>
    <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div class="xl:pt-24  w-3/4 xl:w-1/2 relative pb-12 lg:pb-0">
                    <div class="relative">
                        <div class="absolute">
                            <div class="">
                                <h1 class="my-2 text-gray-800 font-bold text-base  sm:text-2xl">
                                    Looks like you've found the
                                    doorway to the great nothing
                                </h1>
                                <p class="my-2 text-gray-800">Sorry about that! Please visit our hompage to get to where you need to go.</p>
                            
                                <button class="md:w-1/2 sm:w-1/2 my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"><Link to={"/"}>Take me there!</Link></button>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                </div>
            </div>
            </>
    // <div className="w-full flex justify-center  items-center h-full " id="error-page">
    //   <div className="w-full text-center">
    //   <h1>Oops!</h1>
    //   <p>Sorry, an unexpected error has occurred.</p>
    //   <p>
    //     <i>{error.statusText || error.message}</i>
    //   </p>
    //   </div>
    // </div>
  );
}