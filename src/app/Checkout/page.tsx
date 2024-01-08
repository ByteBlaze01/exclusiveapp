

export default function CheckOut() {
    return ( 
        <div className="grid sm:grid-cols-2">
            <div className="mx-auto my-auto">
                <div className=" lg:w-[400px] w-[300px] md:w-[350px] my-5  md:my-8 xl:my-10 sm:text-xs text-[10px] flex justify-between">
                    <a href="">Account</a> /
                    <a href="">My Account</a> /
                    <a href="">Product</a> /
                    <a href="">View Card</a> /
                    <a href=""className="font-semibold">CheckOut</a>
                </div>
                <h3 className="font-semibold md:text-xl lg:text-2xl mb-5">Billing Details</h3>
                <label htmlFor="" className="md:text-xs text-[10px] "> Frist Name<sup className="text-red-500">*</sup></label> <br />
                <input type="name" className="bg-[#F5F5F5] outline-none py-1 mb-1 sm:mb-2 xl:mb-3 md:[300px] duration-1000  lg:w-[400px]" /> <br />

                <label htmlFor="" className="md:text-xs text-[10px]">Company Name</label> <br />
                <input type="name" className="bg-[#F5F5F5] outline-none py-1 mb-1 sm:mb-2 xl:mb-3 md:[300px]  lg:w-[400px]" /> <br />

                <label htmlFor="" className="md:text-xs text-[10px]">Street Sddress<sup>*</sup></label> <br />
                <input type="name" className="bg-[#F5F5F5] outline-none py-1 mb-1 sm:mb-2 xl:mb-3 md:[300px]  lg:w-[400px]" /> <br />

                <label htmlFor="" className="md:text-xs text-[10px]">Apartment, floor,etc.(optional)</label> <br />
                <input type="name" className="bg-[#F5F5F5] outline-none py-1 mb-1 sm:mb-2 xl:mb-3 md:[300px]  lg:w-[400px]" /> <br />

                <label htmlFor="" className="md:text-xs text-[10px]">Town/City<sup className="text-red-500">*</sup></label><br />
                <input type="name" className="bg-[#F5F5F5] outline-none py-1 mb-1 sm:mb-2 xl:mb-3 md:[300px]  lg:w-[400px]" /> <br />

                <label htmlFor="" className="md:text-xs text-[10px]">Phone Number<sup className="text-red-500">*</sup></label> <br />
                <input type="name" className="bg-[#F5F5F5] outline-none py-1 mb-1 sm:mb-2 xl:mb-3 md:[300px]  lg:w-[400px]" /> <br />

                <label htmlFor="" className="md:text-xs text-[10px]">Email Address<sup className="text-red-500">*</sup></label><br />
                <input type="name" className="bg-[#F5F5F5] outline-none py-1 mb-1 sm:mb-2 xl:mb-3 md:[300px]  lg:w-[400px]" /> <br />

                <div className="flex items-center xl-my-10 md:my-8 sm:my-6 my-5">
                    <input type="checkbox" />
                <label htmlFor="" className="md:text-xs text-[9px] pl-3 font-semibold ">save this information for faster check-out next time</label>
                </div>
                
            </div>
            <div className="mx-auto">

                {/* <div className="flex justify-between w-[400px] mb-5">
                    <div className="flex items-center">
                        <img src="/Images/joystick.svg" className="w-[50px] h-[50px]" alt="joystick icon" />
                        <div className="pl-5">LCD Monitor</div>
                    </div>
                    <div>$650</div>
                </div>

               <div className="flex justify-between w-[400px]">
                    <div className="flex items-center">
                        <img src="/Images/joystick.svg" className="w-[50px] h-[50px]" alt="joystick icon" />
                        <div className="pl-5">H1 Gamepad</div>
                    </div>
                    <div>$1100</div>
                </div>

                <div className="flex justify-between w-[400px]">
                    <div>Subtotal:</div>
                    <div>$1750</div>
                </div>

                <div className="flex justify-between w-[400px]">
                    <div>Shipping:</div>
                    <div>free</div>
                </div>

                <div className="flex justify-between w-[400px]">
                    <div>Total:</div>
                    <div>$1750</div>
                </div>  */}
            </div>
        </div>
    )
 }