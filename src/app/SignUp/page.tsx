"use client"
import { Navbar } from "./Components/Navbar/Navbar";
import { Button } from 'primereact/button';
export default function SignUp() {
    return (
        <>
            <div className="grid sm:grid-cols-2">
                <div className="w-[100%]">
                    <img src="/Images/signUpLogo.svg" alt="camera image" ></img>
                </div>
                <div className="mx-auto my-auto">
                    <p className="lg:text-[30px] sm:mx-2 text-[30px]  sm:text-[25px] font-semibold">Create an account</p>
                    <p className="text-[14px] sm:mx-2">Enter your details below</p>
                    <input type="text" placeholder="Name" className="outline-none sm:mx-2 border-b pb-1 border-black sm:my-3 md:my-5 my-5" /> <br />
                    <input type="text" placeholder="Email or Phone number" className="outline-none sm:mx-2 border-b pb-1 border-black" /> <br />
                    <input type="Password" placeholder="Password" className="outline-none sm:mx-2 border-b pb-1 border-black sm:my-3 md:my-5 my-5" /> <br />
                    <button className="text-center sm:mx-2 bg-[#DB4444] w-[250px] mt-5 sm:mt-3 md:mt-5 h-[40px] rounded-md text-white">Create Account</button> <br />
                    <div className="border-black border flex justify-center items-center w-[250px] sm:mx-2 mt-3 my-3">
                        <img src="Images/Google.svg" />
                        <button className="text-center rounded-md my-3 mx-2">sign up with Google</button>
                    </div>
                    <p className="text-center  w-[250px] h-[40px]">Already have account ? <a href="" className="outline-none font-semibold border-b  pb-1 border-black"> Log in</a></p>
                </div>
            </div>
        </>
    )
}
