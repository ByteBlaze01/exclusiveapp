export default function Account() {
    return (
        <>
            <div className="sm:grid hidden grid-cols-2 text-xs px-[70px]">
                <div className="">
                    <a href="" className="pr-3">Home</a> /
                    <a href="" className="font-semibold px-3">My Account</a>
                </div>
                <div className="flex place-content-end ">welcome!
                    <a className="text-[#DB4444] pl-1"> md rimel</a>
                </div>
            </div>
            <div className="grid sm:grid-cols-[3fr,9fr] gap-4">
                <div className="md:grid hidden">
                    <div className="lg:pl-[70px] mx-auto sm:pl-5 mt-10">
                        <ul>
                            <span className="font-semibold font-sans"> Manage My Account </span>
                            <li className="pl-6 text-[#DB4444] text-[14px]">My profile</li>
                            <li className="pl-6  text-[14px]">Addrees book</li>
                            <li className="pl-6  text-[14px]">My payment Options</li>
                        </ul>

                        <ul>
                            <span className="font-semibold font-sans"> My Orders </span>
                            <li className="pl-6  text-[14px]">My Returns</li>
                            <li className="pl-6  text-[14px]">My Cancellations</li>
                        </ul>

                        <ul className="font-semibold font-sans"> My wishList</ul>
                    </div>
                </div>

                <div className="sm:flex px-auto justify-evenly">

                    <div className="w-[80%] my-10 sm:p-10  sm:text-base sm:mx-10 mx-auto  py-5 px-3 shadow-lg ">
                        <h1 className="text-[#DB4444] mx-auto mb-3 font-semibold font-sans">Edit Your Profile</h1>
                        <div className="grid text-xs  lg:grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="" className="font-semibold">Frist Name</label> <br />
                                <input type="name" className="bg-[#F5F5F5] xl:w-[340px] lg:w-[265px] px-2 outline-none  py-2 mb-1 sm:mb-2 xl:mb-3" placeholder="Md" />
                            </div>
                            <div>
                                <label htmlFor="" className="font-semibold">Last Name</label> <br />
                                <input type="name" className="bg-[#F5F5F5] xl:w-[340px] lg:w-[265px] px-2 outline-none  py-2 mb-1 sm:mb-2 xl:mb-3" placeholder="Rimel" />
                            </div>
                        </div>
                        <div className="grid text-xs lg:grid-cols-2 mt-3 gap-3">
                            <div>
                                <label htmlFor="" className="font-semibold">Email</label> <br />
                                <input type="email" className="bg-[#F5F5F5] xl:w-[320px] lg:w-[265px] px-2 outline-none  py-2 mb-1 sm:mb-2 xl:mb-3" placeholder="rimel1111@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="" className="font-semibold">Address</label> <br />
                                <input type="text" className="bg-[#F5F5F5] xl:w-[320px] lg:w-[265px] px-2 outline-none  py-2 mb-1 sm:mb-2 xl:mb-3" placeholder="Kingston, 5236, United State" />
                            </div>
                        </div>

                        <div className=" grid text-xs grid-rows-4 gap-1">
                            <label htmlFor="" className="font-semibold">Password Changes</label>
                            <input type="password" className="bg-[#F5F5F5] px-2 outline-none  py-2 mb-1 sm:mb-2 xl:mb-3 "placeholder="Current Password" />
                            <input type="password" className="bg-[#F5F5F5] px-2 outline-none  py-2 mb-1 sm:mb-2 xl:mb-3 "placeholder="New Password" />
                            <input type="password" className="bg-[#F5F5F5] px-2 outline-none  py-2 mb-1 sm:mb-2 xl:mb-3 "placeholder="Confirm New Password" />
                        </div>

                        <div className="flex place-content-end text-xs">
                                <button className="">Cancel</button>
                                <button className="bg-[#DB4444] px-5 py-2 ml-5 rounded-sm text-white">Save Changes</button>   
                        </div>
                        
                    </div>
                </div>

            </div>



        </>
    )
}