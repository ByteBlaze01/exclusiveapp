"use client"
import { Navbar } from "./Components/Navbar/Navbar";
import { Button } from 'primereact/button';
export default function SignUp (){
    return (
        <>
            <div className="">
                <Navbar />
                {/* <div className="mx-20">

                <Button label="Check" icon="pi pi-check" />
                </div> */}
            </div>
            <div className="grid sm:grid-cols-2 grid-rows-2">
                <div className="w-[100%] h-[400%]">
                    <img src="/Images/cameraimg.svg" alt="camera image" ></img>
                </div>

                

                <div className="mx-auto">
                    <p className="lg:text-[30px] sm:mx-2 text-[30px]  sm:text-[25px] font-semibold">Create an account</p>
                    <p className="text-[14px] sm:mx-2 font-semibold">Enter your details below</p>
                    <input type="text" placeholder="Name" className="outline-none sm:mx-2 border-b pb-1 border-black sm:my-3 md:my-5 my-5" /> <br />
                    <input type="text" placeholder="Email or Phone number" className="outline-none sm:mx-2 border-b pb-1 border-black" /> <br />
                    <input type="Password" placeholder="Password" className="outline-none sm:mx-2 border-b pb-1 border-black sm:my-3 md:my-5 my-5" /> <br />
                    <button className="text-center sm:mx-2 bg-red-400 w-[250px] mt-5 sm:mt-3 md:mt-5 h-[40px] rounded-md">Create Account</button> <br />
                    <button className="text-center sm:mx-2 border-black border my-5 sm:my-3 md:my-5 w-[250px] h-[40px] rounded-md">sign up with Google</button>
                    <p className="text-center  w-[250px] h-[40px]">Already have account ? <a href="" className="outline-none font-semibold border-b  pb-1 border-black"> Log in</a></p>
                </div>

                {/* <div className="mx-auto w-[400px]">
                    <p className="lg:text-[30px] sm:mx-2 text-[30px]  sm:text-[25px] font-semibold">Log in to Exclusive</p>
                    <p className="text-[14px] sm:mx-2 font-semibold">Enter your details below</p>
                    <input type="text" placeholder="Email or Phone number" className="outline-none sm:mx-2 border-b pb-1 border-black" /> <br />
                    <input type="Password" placeholder="Password" className="outline-none sm:mx-2 border-b pb-1 border-black sm:my-3 md:my-5 my-5" /> <br />
                    <div>
                        <button className="text-center sm:mx-2 bg-red-400 w-[150px] mt-5 sm:mt-3 md:mt-5 h-[40px] rounded-md">Log in</button> 
                        <button className="text-red-500">forget password ?</button>
                    </div>
                     
                </div> */}

            </div>
        </>
    )
}