export default function Account() {
    return (
        <>
            <div className="flex justify-between items-center text-xs px-[70px]">
                <div>
                    <a href="" className="pr-3">Home</a> /
                    <a href="" className="font-semibold px-3">My Account</a>
                </div>
                <div>welcome! <a className="text-[#DB4444]">md rimel</a></div>
            </div>
            <div className="grid sm:grid-cols-[3fr,7fr] gap-4">
                <div>
                    <div className="lg:pl-[70px] mx-auto sm:pl-5 mt-10">
                        <ul>
                            <span className="font-semibold font-sans"> Manage My Account </span>
                            <li className="pl-[25px] text-[#DB4444] text-[14px]">My profile</li>
                            <li className="pl-[25px]  text-[14px]">Addrees book</li>
                            <li className="pl-[25px]  text-[14px]">My payment Options</li>
                        </ul>

                        <ul>
                            <span className="font-semibold font-sans"> My Orders </span>
                            <li className="pl-[30px]  text-[14px]">My Returns</li>
                            <li className="pl-[30px]  text-[14px]">My Cancellations</li>
                        </ul>

                        <ul className="font-semibold font-sans"> My wishList</ul>
                    </div>
                </div>

                <div className="sm:flex justify-evenly">


                    <div className="w-[70%] my-10 sm:p-10 text-[13px] sm:text-base sm:mx-10 mx-auto  py-6 px-4 shadow-lg ">
                        <h1 className="text-[#DB4444] mx-auto mb-3 font-semibold font-sans">Edit Your Profile</h1>
                        <div className="grid md:grid-cols-2 mb-2 gap-2  md:gap-12">
                            <div className="">
                                <label htmlFor="">Frist Name</label> <br />
                                <input type="name" className="bg-[#F5F5F5] pl-2 lg:w-[300px] w-[300px] md:w-[200px] outline-none py-1 mb-1 sm:mb-2 xl:mb-3" placeholder="Md" />
                            </div>
                            <div className="">
                                <label htmlFor="">Last Name</label> <br />
                                <input type="name" className="bg-[#F5F5F5] pl-2 lg:w-[300px] w-[300px] md:w-[200px] outline-none py-1 mb-1 sm:mb-2 xl:mb-3" placeholder="Rimel" />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-2  md:gap-12">
                            <div className="">
                                <label htmlFor="">Email</label> <br />
                                <input type="name" className="bg-[#F5F5F5] pl-2 lg:w-[300px] w-[300px] md:w-[200px] outline-none py-1 mb-1 sm:mb-2 xl:mb-3" placeholder="Rimel1111@gmail.com" />
                            </div>
                            <div className="">
                                <label htmlFor="">Address</label> <br />
                                <input type="name" className="bg-[#F5F5F5] pl-2 lg:w-[300px] w-[300px] md:w-[200px] outline-none py-1 mb-1 sm:mb-2 xl:mb-3" placeholder="Kingston, 5236, United State" />
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="" >Password Changes</label> <br />
                            <input type="password" className=" bg-[#F5F5F5] mb-3   lg:w-[650px] xl:w-[700px] 
                        md:w-[480px] pl-2 outline-none py-1 mb-1 sm:mb-2 xl:mb-3 " placeholder="Current Password" />
                            <input type="password" className=" bg-[#F5F5F5] my-3 w-[300px] lg:w-[650px] xl:w-[700px] 
                        md:w-[480px] pl-2 outline-none py-1 mb-1 sm:mb-2 xl:mb-3 " placeholder="New Password" />
                            <input type="password" className=" bg-[#F5F5F5] my-3 w-[300px] lg:w-[650px] xl:w-[700px] 
                        md:w-[480px] pl-2 outline-none py-1 mb-1 sm:mb-2 xl:mb-3 " placeholder="Confirm New Password" />

                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}